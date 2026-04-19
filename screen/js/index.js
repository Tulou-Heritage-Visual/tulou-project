// 柱状图模块1
(function () {
  // 1实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2. 指定配置项和数据
  var option = {
    color: ["#a0522d"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表的大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "15%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "世遗级",
          "国家级",
          "省级",
          "县级",
          "普通",
        ],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "#4a3116",
          fontSize: "12",
          interval: 0
        },
        // 不显示x坐标轴的样式
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "#4a3116",
          fontSize: 12
        },
        // y轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: "#333",
            width: 2
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "数量",
        type: "bar",
        barWidth: "35%",
        data: [46, 56, 53, 158, 3000],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  };
  // 3. 把配置项给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 右上柱状图模块 - 热门土楼景点排行
(function () {
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));

  var option = {
    grid: {
      top: "10%",
      left: "22%", // 调大左侧留白，确保长楼名（如田螺坑土楼群）能显示全
      bottom: "10%"
    },
    xAxis: {
      show: false // 不显示X轴线和文字，让画面更简洁
    },
    yAxis: [
      {
        show: true,
        data: ["怀远楼", "振成楼", "二宜楼", "田螺坑", "承启楼"],
        inverse: true, // 让排名第一的在最上面
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: "#4a3116", // 修改为深棕色文字
          fontSize: 12
        }
      },
      {
        show: true,
        inverse: true,
        data: [75, 80, 85, 92, 98], // 热度分值
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#4a3116" // 右侧数字也改为深棕色
          }
        },
        axisLine: { show: false },
        axisTick: { show: false }
      }
    ],
    series: [
      {
        name: "热度",
        type: "bar",
        yAxisIndex: 0,
        data: [75, 80, 85, 92, 98],
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            // 柱子颜色：使用赭石色到浅棕色的渐变，非常有质感
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: "#cd853f" },
              { offset: 1, color: "#a0522d" }
            ])
          }
        },
        // 显示柱子内部的数值
        label: {
          normal: {
            show: false
          }
        }
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        data: [100, 100, 100, 100, 100],
        barWidth: 14,
        itemStyle: {
          normal: {
            color: "none",
            borderColor: "rgba(74, 49, 22, 0.2)", // 边框改为淡褐色
            borderWidth: 1,
            barBorderRadius: 15
          }
        }
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 左中折线图模块 - 土楼修缮与保护进度
(function () {
  var myChart = echarts.init(document.querySelector(".line .chart"));

  var option = {
    // 1. 设置线条颜色（赭石色和深褐色，符合古风）
    color: ["#a0522d", "#8b4513"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // 修改图例文字颜色为深棕色
      textStyle: {
        color: "#4a3116",
        fontSize: "12"
      },
      right: "10%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "rgba(0,140,255,.1)",
      containLabel: true
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      // 2. 修改为年份数据
      data: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      axisTick: { show: false },
      axisLabel: {
        color: "#4a3116" // X轴文字颜色
      },
      axisLine: { show: false }
    },
    yAxis: {
      type: "value",
      axisTick: { show: false },
      axisLabel: {
        color: "#4a3116" // Y轴文字颜色
      },
      axisLine: { show: false },
      splitLine: {
        lineStyle: {
          color: "rgba(74, 49, 22, 0.1)" // 背景网格线颜色调淡
        }
      }
    },
    series: [
      {
        name: "重点修缮数量",
        type: "line",
        smooth: true, // 折线修匀
        // 3. 修改为具体数据
        data: [120, 152, 190, 210, 260, 310, 340]
      },
      {
        name: "数字化存档",
        type: "line",
        smooth: true,
        data: [50, 80, 120, 180, 240, 300, 380]
      }
    ]
  };

  myChart.setOption(option);
  // 4. 让图表自适应窗口大小
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 饼形图1
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  // 2.指定配置
  var option = {
    color: ["#8b4513", "#a0522d", "#cd853f", "#deb887", "#bc8f8f"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    legend: {
      bottom: "0%",
      // 修改小图标的大小
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "#4a3116",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "地区分布",
        type: "pie",
        // 这个radius可以修改饼形图的大小
        // radius 第一个值是内圆的半径 第二个值是外圆的半径
        radius: ["40%", "60%"],
        center: ["50%", "45%"],
        avoidLabelOverlap: false,
        // 图形上的文字
        label: {
          show: false,
          position: "center"


        },
        // 链接文字和图形的线是否显示
        labelLine: {
          show: false
        },
        data: [
          { value: 1500, name: "龙岩市" },
          { value: 1200, name: "漳州市" },
          { value: 500, name: "泉州市" },
          { value: 300, name: "三明市" },
          { value: 200, name: "其他" }
        ]
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 右中折线图模块 - 月度客流量走势
(function () {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));

  var option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "#4a3116", // 深棕色图例
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        // 月份数据
        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        axisLabel: {
          textStyle: {
            color: "#4a3116",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(74, 49, 22, 0.2)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        name: "单位:万",
        nameTextStyle: {
          color: "#4a3116"
        },
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(74, 49, 22, 0.2)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "#4a3116",
            fontSize: 12
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(74, 49, 22, 0.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "2026年客流预测",
        type: "line",
        smooth: true, // 平滑曲线
        lineStyle: {
          color: "#a0522d",
          width: 2
        },
        // 设置阴影区域，增加视觉丰富度
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: "rgba(160, 82, 45, 0.4)" },
              { offset: 0.8, color: "rgba(160, 82, 45, 0.1)" }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        itemStyle: {
          color: "#a0522d",
          borderColor: "rgba(160, 82, 45, 0.2)",
          borderWidth: 10
        },
        // 模拟客流数据：春节和国庆高峰
        data: [28, 58, 32, 38, 52, 30, 45, 48, 42, 72, 25, 20]
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 右下饼形图模块 - 土楼建筑形状分类
(function () {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));

  var option = {
    // 1. 配色方案：赭石、陶土、木纹、夯土、瓦片色
    color: ["#a0522d", "#cd853f", "#deb887", "#8b4513", "#5d4037"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      bottom: "0%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "#4a3116", // 深棕色文字
        fontSize: "10"
      }
    },
    series: [
      {
        name: "建筑形状",
        type: "pie",
        // 半径：第一个是内圆半径，第二个是外圆半径
        radius: ["10%", "70%"],
        center: ["50%", "42%"],
        roseType: "radius", // 关键：南丁格尔玫瑰图模式
        // 图形上的文字
        label: {
          show: true,
          fontSize: 10,
          color: "#4a3116"
        },
        // 链接文字和图表的线
        labelLine: {
          length: 6,
          length2: 8,
          lineStyle: {
            color: "rgba(74, 49, 22, 0.3)"
          }
        },
        data: [
          { value: 2100, name: "方形楼" },
          { value: 1200, name: "圆形楼" },
          { value: 150, name: "五凤楼" },
          { value: 100, name: "半月形" },
          { value: 204, name: "其他" }
        ]
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
(function () {
  var myChart = echarts.init(document.querySelector(".map .chart"));

  // 定义土楼主要分布点的经纬度（模拟数据，可根据需要微调）
  var tulouData = [
    // --- 漳州南靖区域 ---
    { name: "田螺坑土楼群", value: [117.05, 24.58, 100] },
    { name: "河坑土楼群", value: [117.01, 24.63, 90] },
    { name: "怀远楼", value: [117.03, 24.67, 85] },
    { name: "和贵楼", value: [117.08, 24.66, 80] },

    // --- 龙岩永定区域 ---
    { name: "承启楼(高北)", value: [116.90, 24.65, 100] },
    { name: "振成楼(洪坑)", value: [116.92, 24.66, 95] },
    { name: "初溪土楼群", value: [116.75, 24.55, 90] },
    { name: "衍香楼", value: [116.85, 24.60, 80] },

    // --- 漳州华安区域 ---
    { name: "二宜楼", value: [117.58, 25.02, 95] },
    { name: "南阳楼", value: [117.59, 25.03, 80] },

    // --- 粤东(潮汕/梅州)区域 ---
    { name: "大埔县花萼楼", value: [116.65, 24.45, 75] },
    { name: "饶平县道韵楼", value: [116.91, 23.68, 70] },
    { name: "联丰花萼楼", value: [116.75, 24.30, 60] },

    // --- 赣南(赣州)区域 ---
    { name: "关西新围", value: [114.75, 24.85, 75] },
    { name: "燕翼围", value: [114.78, 24.88, 70] },
    { name: "栗园围", value: [114.70, 24.90, 65] },

    // --- 补充分布点（增加视觉密度） ---
    { name: "适中土楼群", value: [117.15, 25.05, 60] },
    { name: "平和县土楼", value: [117.02, 24.35, 55] },
    { name: "诏安县土楼", value: [117.15, 23.70, 50] }
  ];

  var option = {
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(245, 222, 179, 0.9)",
      textStyle: { color: "#4a3116" },
      formatter: '{b}' // 鼠标移上去显示名字
    },
    geo: {
      map: "china",
      // --- 关键设置：聚焦到福建及周边 ---
      center: [116.5, 25.5], // 设置地图中心点为闽粤赣交界
      zoom: 3.5,             // 放大倍数，从1.2调大到3.5
      roam: true,            // 允许用户手动拖拽和缩放
      label: {
        emphasis: { show: false }
      },
      itemStyle: {
        normal: {
          areaColor: "rgba(242, 234, 218, 0.6)", // 宣纸色
          borderColor: "rgba(74, 49, 22, 0.4)",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#deb887"
        }
      }
    },
    series: [
      {
        name: "土楼分布点",
        type: "effectScatter", // 带有涟漪效果的散点
        coordinateSystem: "geo",
        data: tulouData,
        // 调小一点基础尺寸，看起来更精致
        symbolSize: function (val) {
          return val[2] / 10; // 根据上面 value 的第三位（权重）动态决定点的大小
        },
        showEffectOn: "render",
        rippleEffect: {
          brushType: "stroke",
          scale: 2.5 // 涟漪扩散的倍数
        },
        itemStyle: {
          normal: {
            color: "#a0522d", // 统一的赭石色
            shadowBlur: 5,
            shadowColor: "rgba(74, 49, 22, 0.5)"
          }
        },
        zlevel: 1
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
