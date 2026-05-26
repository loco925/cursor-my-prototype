/**
 * Push prototype files to private repo via GitHub Contents API.
 * Usage: GITHUB_TOKEN=xxx node scripts/push-via-api.mjs
 */
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';

const OWNER = 'loco925';
const REPO = 'cursor-my-prototype';
const BRANCH = 'main';
const ROOT = join(fileURLToPath(new URL('..', import.meta.url)));

const token = process.env.GITHUB_TOKEN?.trim();
if (!token) {
  console.error('缺少环境变量 GITHUB_TOKEN（需 repo 权限）');
  process.exit(1);
}

function collectFiles(dir, base = dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name === '.git' || name === 'node_modules') continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...collectFiles(full, base));
    else out.push(relative(base, full).replace(/\\/g, '/'));
  }
  return out;
}

async function gh(method, path, body) {
  const res = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'User-Agent': 'cursor-prototype-push',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text };
  }
  if (!res.ok) {
    const msg = data.message || res.statusText;
    throw new Error(`${method} ${path} -> ${res.status}: ${msg}`);
  }
  return data;
}

async function getFileSha(filePath) {
  try {
    const data = await gh(
      'GET',
      `/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(filePath).replace(/%2F/g, '/')}?ref=${BRANCH}`
    );
    return data.sha;
  } catch (e) {
    if (String(e.message).includes('404')) return undefined;
    throw e;
  }
}

async function uploadFile(filePath) {
  const full = join(ROOT, filePath);
  const content = readFileSync(full).toString('base64');
  const sha = await getFileSha(filePath);
  const body = {
    message: sha ? `update: ${filePath}` : `add: ${filePath}`,
    content,
    branch: BRANCH,
  };
  if (sha) body.sha = sha;
  await gh('PUT', `/repos/${OWNER}/${REPO}/contents/${filePath}`, body);
  console.log(sha ? '更新' : '新增', filePath);
}

async function main() {
  await gh('GET', `/repos/${OWNER}/${REPO}`);
  const files = collectFiles(ROOT);
  if (!files.length) {
    console.error('未找到待上传文件');
    process.exit(1);
  }
  for (const f of files) await uploadFile(f);
  console.log(`\n完成：${files.length} 个文件已推送到 https://github.com/${OWNER}/${REPO}`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
