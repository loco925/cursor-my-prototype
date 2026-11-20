(function () {
  "use strict";

  var outboundEvents = {
    "SO261109013312": [
      { time: "2026-11-16 15:08:31", type: "已发货", from: "待发货", to: "已发货", operator: "仓库02", content: "发货单菜单操作【设置发货】" },
      { time: "2026-11-16 10:32:18", type: "撤销发货", from: "已发货", to: "待分拣", operator: "仓库主管", content: "WMS异常流程-撤销发货" },
      { time: "2026-11-09 17:46:10", type: "已发货", from: "待发货", to: "已发货", operator: "仓库01", content: "PDA扫描发货成功" }
    ],
    "SO261116006821": [
      { time: "2026-11-16 19:12:04", type: "已发货", from: "待发货", to: "已发货", operator: "仓库03", content: "PDA扫描发货成功" }
    ],
    "SO261118002597": [],
    "SO261118004219": [
      { time: "2026-11-18 16:42:09", type: "已发货", from: "待发货", to: "已发货", operator: "仓库05", content: "发货单菜单操作【设置发货】" }
    ],
    "SO261119001728": [
      { time: "2026-11-19 11:06:33", type: "已发货", from: "待发货", to: "已发货", operator: "仓库06", content: "PDA扫描发货成功" }
    ],
    "SO261117009406": [
      { time: "2026-11-17 18:35:16", type: "已发货", from: "待发货", to: "已发货", operator: "仓库07", content: "PDA扫描发货成功" }
    ]
  };

  var rows = [
    {
      id: "WB202611090001",
      scene: "reship",
      orderId: "A261108069236",
      outboundCode: "SO261109013312",
      tracking: "SYDE017077761",
      logisticsNo: "SYOA2611097138",
      tailTracking: "003404349221",
      channel: "SY-顺速宝挂号(普货)",
      carrier: "顺友物流",
      generatedAt: "2026-11-09 09:42:36",
      creator: "仓库01",
      source: "WMS小包出库扫描核查",
      status: "退回",
      orderStatus: "已发货",
      otherStatus: "正常发货",
      latestAt: "2026-11-15 16:20:41",
      latestEvent: "退件已返回发件仓，等待仓库重新处理",
      trackId: "OL202611090871",
      trackType: "跟踪号",
      tracks: [
        { time: "2026-11-15 16:20:41", title: "退件已返回发件仓", detail: "因派送异常退回，包裹已返回处理中心" },
        { time: "2026-11-13 11:08:22", title: "退件运输中", detail: "退件已发往发件仓" },
        { time: "2026-11-11 20:14:05", title: "派送异常", detail: "收件地址无法完成派送" },
        { time: "2026-11-10 08:31:17", title: "已上网", detail: "承运商已揽收包裹" }
      ]
    },
    {
      id: "WB202611160002",
      scene: "reship",
      orderId: "A261108069236",
      outboundCode: "SO261109013312",
      tracking: "SYRM167165955",
      logisticsNo: "SYOA2611168942",
      tailTracking: "420926129274",
      channel: "顺邮宝挂号",
      carrier: "顺友物流",
      generatedAt: "2026-11-16 14:22:09",
      creator: "仓库02",
      source: "WMS小包出库扫描核查",
      status: "已妥投",
      orderStatus: "已发货",
      otherStatus: "正常发货",
      latestAt: "2026-11-20 10:35:26",
      latestEvent: "包裹已投递至收件地址，签收成功",
      trackId: "OL202611161245",
      trackType: "跟踪号",
      tracks: [
        { time: "2026-11-20 10:35:26", title: "已妥投", detail: "包裹已投递至收件地址" },
        { time: "2026-11-20 08:12:44", title: "派送中", detail: "包裹正在安排末端派送" },
        { time: "2026-11-18 03:45:10", title: "到达目的国", detail: "包裹已到达目的国处理中心" },
        { time: "2026-11-16 21:06:52", title: "已上网", detail: "承运商已揽收包裹" }
      ]
    },
    {
      id: "WB202611160003",
      scene: "delivered",
      orderId: "A261115083417",
      outboundCode: "SO261116006821",
      tracking: "YT2611160073851",
      logisticsNo: "YT202611160991",
      tailTracking: "94001112025558930172",
      channel: "云途全球专线挂号",
      carrier: "云途物流",
      generatedAt: "2026-11-16 13:48:20",
      creator: "仓库03",
      source: "WMS小包出库列表",
      status: "已妥投",
      orderStatus: "已发货",
      otherStatus: "正常发货",
      latestAt: "2026-11-19 14:26:08",
      latestEvent: "Delivered, Front Door/Porch",
      trackId: "OL202611161501",
      trackType: "跟踪号",
      tracks: [
        { time: "2026-11-19 14:26:08", title: "已妥投", detail: "Delivered, Front Door/Porch" },
        { time: "2026-11-19 09:02:17", title: "派送中", detail: "Out for Delivery" },
        { time: "2026-11-17 06:41:30", title: "运输中", detail: "Departed from origin facility" },
        { time: "2026-11-16 20:11:05", title: "已上网", detail: "Shipment information received" }
      ]
    },
    {
      id: "WB202611180004",
      scene: "printed",
      orderId: "A261118017520",
      outboundCode: "SO261118002597",
      tracking: "YWDE026118402",
      logisticsNo: "YW26111872543",
      tailTracking: "",
      channel: "燕文专线追踪",
      carrier: "燕文物流",
      generatedAt: "2026-11-18 09:16:42",
      creator: "仓库04",
      source: "WMS小包出库列表",
      status: "暂无轨迹",
      orderStatus: "已核查",
      otherStatus: "正常发货",
      latestAt: "",
      latestEvent: "面单已生成，尚未产生承运商物流轨迹",
      trackId: "",
      trackType: "跟踪号",
      tracks: []
    },
    {
      id: "WB202611180005",
      scene: "repeat",
      orderId: "A261118041936",
      outboundCode: "SO261118004219",
      tracking: "YT2611180043310",
      logisticsNo: "YT202611181874",
      tailTracking: "926129032104",
      channel: "云途全球专线挂号",
      carrier: "云途物流",
      generatedAt: "2026-11-18 10:11:27",
      creator: "仓库05",
      source: "WMS小包出库扫描核查",
      printHistory: [
        { time: "2026-11-18 10:11:27", operator: "仓库05" },
        { time: "2026-11-18 10:14:03", operator: "仓库05" }
      ],
      status: "运输中",
      orderStatus: "已发货",
      otherStatus: "正常发货",
      latestAt: "2026-11-20 07:33:54",
      latestEvent: "包裹已离开始发处理中心",
      trackId: "OL202611181883",
      trackType: "跟踪号",
      tracks: [
        { time: "2026-11-20 07:33:54", title: "运输中", detail: "包裹已离开始发处理中心" },
        { time: "2026-11-18 18:05:23", title: "已上网", detail: "承运商已揽收包裹" }
      ]
    },
    {
      id: "WB202611190007",
      scene: "notrack",
      orderId: "A261119009842",
      outboundCode: "SO261119001728",
      tracking: "SYAE019887341",
      logisticsNo: "SYOA2611195528",
      tailTracking: "",
      channel: "SY-顺速宝挂号(普货)",
      carrier: "顺友物流",
      generatedAt: "2026-11-19 10:26:38",
      creator: "仓库06",
      source: "WMS小包出库扫描核查",
      status: "暂无轨迹",
      orderStatus: "已发货",
      otherStatus: "正常发货",
      latestAt: "",
      latestEvent: "WMS已发货，物流跟踪表尚未返回该跟踪号轨迹",
      trackId: "",
      trackType: "跟踪号",
      tracks: []
    },
    {
      id: "WB202611170008",
      scene: "mismatch",
      orderId: "A261117072611",
      outboundCode: "SO261117009406",
      tracking: "SYRM177812406",
      logisticsNo: "SYOA2611179611",
      tailTracking: "420921389683",
      channel: "顺邮宝挂号",
      carrier: "顺友物流",
      generatedAt: "2026-11-17 15:08:44",
      creator: "仓库07",
      source: "WMS小包出库扫描核查",
      status: "已妥投",
      orderStatus: "已暂停",
      otherStatus: "暂停发货",
      latestAt: "2026-11-20 13:26:09",
      latestEvent: "包裹已投递至收件地址，签收成功",
      trackId: "OL202611172016",
      trackType: "跟踪号",
      tracks: [
        { time: "2026-11-20 13:26:09", title: "已妥投", detail: "包裹已投递至收件地址" },
        { time: "2026-11-20 08:51:12", title: "派送中", detail: "包裹正在安排末端派送" },
        { time: "2026-11-18 00:16:42", title: "已上网", detail: "承运商已揽收包裹" }
      ]
    }
  ];

  var currentScene = "all";
  var currentRow = null;
  var tbody = document.getElementById("waybillRows");
  var resultCount = document.getElementById("resultCount");
  var drawer = document.getElementById("detailDrawer");
  var mask = document.getElementById("drawerMask");

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function statusClass(status) {
    if (status === "已妥投") return "status-delivered";
    if (status === "运输中") return "status-transit";
    if (status === "已上网") return "status-online";
    if (status === "退回") return "status-return";
    return "status-none";
  }

  function datePart(value) {
    return value ? value.slice(0, 10) : "";
  }

  function getFilteredRows() {
    var keyword = document.getElementById("keyword").value.trim().toLowerCase();
    var channel = document.getElementById("channelFilter").value;
    var status = document.getElementById("statusFilter").value;
    var orderStatus = document.getElementById("orderStatusFilter").value;
    var excludeOrderStatus = document.getElementById("excludeOrderStatusFilter").value;
    var otherStatus = document.getElementById("otherStatusFilter").value;
    var from = document.getElementById("dateFrom").value;
    var to = document.getElementById("dateTo").value;
    return rows.filter(function (row) {
      var haystack = [row.id, row.orderId, row.outboundCode, row.tracking, row.logisticsNo, row.tailTracking].join("|").toLowerCase();
      return (!keyword || haystack.indexOf(keyword) >= 0)
        && (!channel || row.channel === channel)
        && (!status || row.status === status)
        && (!orderStatus || row.orderStatus === orderStatus)
        && (!excludeOrderStatus || row.orderStatus !== excludeOrderStatus)
        && (!otherStatus || row.otherStatus === otherStatus)
        && (currentScene === "all" || row.scene === currentScene)
        && (!from || datePart(row.generatedAt) >= from)
        && (!to || datePart(row.generatedAt) <= to);
    });
  }

  function renderTable() {
    var data = getFilteredRows();
    resultCount.textContent = data.length;
    if (!data.length) {
      tbody.innerHTML = '<tr><td class="empty-row" colspan="12">未查询到符合条件的运单记录</td></tr>';
      return;
    }
    tbody.innerHTML = data.map(function (row) {
      return '<tr>'
        + '<td><div class="mono primary-text">' + escapeHtml(row.id) + '</div></td>'
        + '<td><div class="mono">' + escapeHtml(row.orderId) + '</div></td>'
        + '<td><div class="mono">' + escapeHtml(row.outboundCode) + '</div></td>'
        + '<td><div class="mono primary-text">' + escapeHtml(row.tracking || "-") + '</div></td>'
        + '<td><div class="mono">' + escapeHtml(row.logisticsNo || "-") + '</div></td>'
        + '<td><div class="mono">' + escapeHtml(row.tailTracking || "-") + '</div></td>'
        + '<td><div class="channel-name">' + escapeHtml(row.channel) + '</div><div class="subline">' + escapeHtml(row.carrier) + '</div></td>'
        + '<td><span class="status ' + statusClass(row.status) + '">' + escapeHtml(row.status) + '</span></td>'
        + '<td><span class="status ' + (row.orderStatus === "已暂停" ? "status-return" : "status-none") + '">' + escapeHtml(row.orderStatus) + '</span></td>'
        + '<td><span class="status ' + (row.otherStatus === "暂停发货" ? "status-return" : "status-none") + '">' + escapeHtml(row.otherStatus) + '</span></td>'
        + '<td><div>' + escapeHtml(row.generatedAt) + '</div></td>'
        + '<td><button class="link-btn detail-btn" data-id="' + escapeHtml(row.id) + '">详情</button></td>'
        + '</tr>';
    }).join("");

    Array.prototype.forEach.call(document.querySelectorAll(".detail-btn"), function (button) {
      button.addEventListener("click", function () {
        openDrawer(button.getAttribute("data-id"));
      });
    });
  }

  function renderSummary(row) {
    document.getElementById("detailSummary").innerHTML = [
      ["订单编号", row.orderId],
      ["WMS出库单号", row.outboundCode],
      ["跟踪号", row.tracking || "-"],
      ["邮寄方式", row.channel],
      ["订单状态（当前）", row.orderStatus],
      ["其他状态（当前）", row.otherStatus]
    ].map(function (item) {
      return '<div class="summary-item"><div class="summary-label">' + escapeHtml(item[0]) + '</div><div class="summary-value">' + escapeHtml(item[1]) + '</div></div>';
    }).join("");
  }

  function renderTracks(row) {
    var panel = document.getElementById("trackPanel");
    if (!row.tracks.length) {
      panel.innerHTML = '<h3 class="section-title">物流轨迹</h3>'
        + '<p class="section-help">关联条件：订单编号＋跟踪号＋物流跟踪类型=跟踪号；轨迹来源不参与限制。</p>'
        + '<div class="empty-state">暂未匹配到物流轨迹<br><span class="subline">' + escapeHtml(row.latestEvent) + '</span></div>';
      return;
    }
    panel.innerHTML = '<h3 class="section-title">物流轨迹</h3>'
      + '<p class="section-help">关联条件：订单编号＋跟踪号＋物流跟踪类型=跟踪号；轨迹来源不参与限制。</p>'
      + '<ul class="timeline">'
      + row.tracks.map(function (item, index) {
        return '<li class="timeline-item ' + (index === 0 ? "current" : "") + '">'
          + '<span class="timeline-dot"></span>'
          + '<div class="timeline-time">' + escapeHtml(item.time) + '</div>'
          + '<div class="timeline-title">' + escapeHtml(item.title) + '</div>'
          + '<div class="timeline-detail">' + escapeHtml(item.detail) + '</div></li>';
      }).join("")
      + '</ul>';
  }

  function renderWms(row) {
    var panel = document.getElementById("wmsPanel");
    var wmsEvents = (outboundEvents[row.outboundCode] || []).map(function (event) {
      return Object.assign({ sourceType: "wms" }, event);
    });
    var printEvents = rows.filter(function (item) {
      return item.outboundCode === row.outboundCode;
    }).reduce(function (events, item) {
      var history = item.printHistory && item.printHistory.length
        ? item.printHistory
        : [{ time: item.generatedAt, operator: item.creator }];
      return events.concat(history.map(function (print, index) {
        return {
          time: print.time,
          type: index === 0 ? "面单首次打印" : "面单重复打印",
          operator: print.operator,
          content: "跟踪号：" + item.tracking + "｜仓库完成面单核查并输出有效物流面单",
          relatedTo: item.id,
          sourceType: "waybill"
        };
      }));
    }, []);
    var events = wmsEvents.concat(printEvents).sort(function (a, b) {
      return b.time.localeCompare(a.time);
    });
    panel.innerHTML = '<h3 class="section-title">仓库操作记录</h3>'
      + '<p class="section-help">页面根据本条运单关联的WMS出库单号展示仓库操作。面单首次/重复打印来自打印记录；已发货、撤销发货来自WMS出库日志。物流轨迹是否产生不影响WMS操作记录展示。</p>'
      + '<ul class="timeline">'
      + events.map(function (event) {
        var related = event.sourceType === "waybill" && event.relatedTo === row.id;
        var tagText = event.sourceType === "waybill"
          ? (related ? "打印记录" : "其他运单打印")
          : "WMS出库日志";
        return '<li class="timeline-item ' + (related ? "related" : "") + '">'
          + '<span class="timeline-dot"></span>'
          + '<div class="timeline-time">' + escapeHtml(event.time) + '</div>'
          + '<div class="timeline-title">' + escapeHtml(event.type)
          + '<span class="event-tag ' + (related ? "" : "other") + '">' + escapeHtml(tagText) + '</span></div>'
          + (event.sourceType === "wms" ? '<div class="timeline-detail">出库状态：' + escapeHtml(event.from) + ' → ' + escapeHtml(event.to) + '</div>' : '')
          + '<div class="timeline-detail">操作人：' + escapeHtml(event.operator) + '｜' + escapeHtml(event.content) + '</div></li>';
      }).join("")
      + '</ul>';
  }

  function selectTab(tabName) {
    Array.prototype.forEach.call(document.querySelectorAll(".tab"), function (tab) {
      tab.classList.toggle("active", tab.getAttribute("data-tab") === tabName);
    });
    document.getElementById("trackPanel").classList.toggle("active", tabName === "track");
    document.getElementById("wmsPanel").classList.toggle("active", tabName === "wms");
  }

  function openDrawer(id) {
    currentRow = rows.filter(function (item) { return item.id === id; })[0];
    if (!currentRow) return;
    document.getElementById("drawerTitle").textContent = currentRow.id;
    renderSummary(currentRow);
    renderTracks(currentRow);
    renderWms(currentRow);
    selectTab("track");
    mask.hidden = false;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    mask.hidden = true;
    document.body.style.overflow = "";
  }

  document.getElementById("searchBtn").addEventListener("click", renderTable);
  document.getElementById("resetBtn").addEventListener("click", function () {
    document.getElementById("keyword").value = "";
    document.getElementById("channelFilter").value = "";
    document.getElementById("statusFilter").value = "";
    document.getElementById("orderStatusFilter").value = "";
    document.getElementById("excludeOrderStatusFilter").value = "";
    document.getElementById("otherStatusFilter").value = "";
    document.getElementById("dateFrom").value = "2026-11-01";
    document.getElementById("dateTo").value = "2026-11-20";
    currentScene = "all";
    Array.prototype.forEach.call(document.querySelectorAll(".chip"), function (chip) {
      chip.classList.toggle("active", chip.getAttribute("data-scene") === "all");
    });
    renderTable();
  });
  document.getElementById("keyword").addEventListener("keydown", function (event) {
    if (event.key === "Enter") renderTable();
  });
  Array.prototype.forEach.call(document.querySelectorAll(".chip"), function (chip) {
    chip.addEventListener("click", function () {
      currentScene = chip.getAttribute("data-scene");
      Array.prototype.forEach.call(document.querySelectorAll(".chip"), function (item) {
        item.classList.toggle("active", item === chip);
      });
      renderTable();
    });
  });
  Array.prototype.forEach.call(document.querySelectorAll(".tab"), function (tab) {
    tab.addEventListener("click", function () { selectTab(tab.getAttribute("data-tab")); });
  });
  document.getElementById("closeDrawer").addEventListener("click", closeDrawer);
  mask.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && drawer.classList.contains("open")) closeDrawer();
  });

  renderTable();
}());
