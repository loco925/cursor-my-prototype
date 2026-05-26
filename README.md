# cursor-my-prototype

存放 Cursor 生成的 WMS / 跨境 B 端 HTML 高保真原型，便于版本管理与分享演示。

## 目录约定

与本地需求仓库 `cursor需求` 业务目录对齐，例如：

| 路径 | 说明 |
| --- | --- |
| `02-海外仓与出库/` | 海外仓、谷仓、西邮等转运/出库相关原型 |

单文件可直接用浏览器打开（含内联样式与脚本），无需构建。

## 已收录原型

- `02-海外仓与出库/海外仓转运-谷仓计划单与出库单-高保真原型demo.html` — 谷仓计划单 + 出库单页签高保真演示

## 推送到 GitHub

本机未配置 Git 凭据时，可在项目根目录执行（需 [Personal Access Token](https://github.com/settings/tokens)，勾选 `repo`）：

```powershell
cd e:\cursor需求\cursor-my-prototype
$env:GITHUB_TOKEN = "你的token"
node scripts/push-via-api.mjs
```

已安装 Git 且已登录 GitHub 时，也可：

```powershell
git clone https://github.com/loco925/cursor-my-prototype.git
# 将本目录下文件复制进克隆目录后
git add .
git commit -m "add: 谷仓计划单与出库单高保真原型"
git push
```
