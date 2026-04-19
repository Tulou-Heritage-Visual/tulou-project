// sankey.js —— 独立桑基图模块，不自动执行
function initSankey() {
  // 初始化ECharts实例
  var myChart = echarts.init(document.getElementById('sangji-chart'));
  var customTip = document.getElementById('customTip');

  // 土楼信息库
  var buildingInfo = {
      "洪坑土楼群": {
          img: "images/洪坑土楼群.jpg",
          desc: "洪坑土楼群位于福建省龙岩市永定区，是福建土楼中最具代表性的群落之一，已列入世界文化遗产名录。楼群内包含振成楼、福裕楼、奎聚楼、如升楼等多座风格各异的土楼，集居住、防御、宗族文化于一体。整体依山傍水，布局错落有致，既保留了客家传统夯土建筑技艺，又体现了实用与美学的高度统一，是研究客家民居与聚落文化的重要实例。"
      },
      "初溪土楼群": {
          img: "images/初溪土楼群.jpg",
          desc: "初溪土楼群坐落于永定区下洋镇初溪村，由数十座土楼组成，以集庆楼为核心建筑。楼群整体沿山势分布，风格古朴雄浑，历史跨度从明代延续至现代，保存完整度极高。土楼均以生土夯筑而成，墙体厚实坚固，内部结构严谨，兼具防御功能与生活实用性。作为世界文化遗产，初溪土楼群完整展现了客家聚族而居的传统生活形态与建筑智慧。"
      },
      "高北土楼群": {
          img: "images/高北土楼群.jpg",
          desc: "高北土楼群位于永定区高头镇，以“土楼王”承启楼为中心，包括世泽楼、五云楼等知名建筑，是福建土楼标志性景观之一。承启楼规模宏大，结构规整，楼中有楼、环中有环，最多可容纳近千人聚居，体现了客家先民高超的夯土技艺与团结共生的宗族理念。楼群保存完好，历史底蕴深厚，具有极高的文化、艺术与研究价值。"
      },
      "田螺坑土楼群": {
          img: "images/田螺坑土楼群.jpg",
          desc: "田螺坑土楼群位于漳州市南靖县，因四座圆楼簇拥一座方楼，被形象称为“四菜一汤”，是福建土楼最具辨识度的地标。楼群依山而建，高低错落，与自然环境完美融合，从高处俯瞰极具视觉冲击力。建筑群包含方形、圆形等多种形制，防御功能完备，居住布局合理，是客家与闽南文化交融的典型代表，已列入世界文化遗产。"
      },
      "云水谣土楼群": {
          img: "images/云水谣土楼群.jpg",
          desc: "云水谣土楼群位于南靖县云水谣古镇，以和贵楼、怀远楼为核心，伴随千年古道与溪流，环境清幽秀美。和贵楼是建在沼泽地上的方形土楼，历经百年依然稳固；怀远楼则工艺精美，注重文化内涵，内部学堂保存完好。土楼群兼具居住功能与人文意境，将传统夯土建筑与自然山水融为一体，成为兼具观光、研学与文化展示的重要载体。"
      },
      "河坑土楼群": {
          img: "images/河坑土楼群.jpg",
          desc: "河坑土楼群位于南靖县，由十余座明清时期建造的土楼组成，整体布局呈北斗七星形态，极具人文与观赏价值。楼群以圆形土楼为主，间以方形、异形土楼，错落分布于山谷之间，气势壮观。土楼结构坚固，防御体系完善，内部空间开阔，体现了客家先民因地制宜、安全聚居的建筑智慧，是福建土楼聚落形态的典型范例。"
      },
      "大地土楼群": {
          img: "images/大地土楼群.jpg",
          desc: "大地土楼群位于漳州市华安县，以二宜楼为核心，包括南阳楼、东阳楼等建筑，是华安土楼的典型代表。二宜楼规模宏大，内部空间复杂，保存有大量清代壁画、楹联与木雕，文化内涵极为丰富。楼群整体布局严谨，夯筑技艺精湛，兼具防御、居住、祭祀等多重功能，充分展现了客家土楼在结构、艺术与文化上的高度成就。"
      },
      "上坪土楼群": {
          img: "images/上坪土楼群.jpg",
          desc: "上坪土楼群位于华安县仙都镇上坪村，以异形土楼和方形土楼为主要特色，建筑风格古朴粗犷，历史悠久。楼群依山势而建，保留了较为原始的客家夯土建筑风貌，墙体厚实，结构稳固。虽规模不及其他知名楼群，却真实反映了山区客家民居的建造特点与生活形态，具有重要的民俗与建筑研究价值。"
      },
      "庄上土楼群": {
          img: "images/庄上土楼群.jpg",
          desc: "庄上土楼群位于漳州市平和县，以庄上大楼为核心，是闽西南大型方形土楼的代表之一。楼群整体气势恢宏，墙体高大坚固，内部院落宽敞，可容纳大量族人聚居，兼具居住与防御功能。建筑整体保留了典型的客家夯土技艺，风格朴素厚重，体现了山区聚落安全实用的建造理念，是研究闽南客家交融文化的重要实物遗存。"
      },
      "振成楼": {
          img: "images/振成楼.jpg",
          desc: "振成楼位于永定洪坑土楼群，被誉为“土楼王子”，是福建土楼中中西合璧建筑风格的典范。楼体为圆形夯土结构，外环高大厚实，内环采用西式柱廊与雕花装饰，内部设有厅堂、水井、浴室，功能齐全。楼内保存大量精美木雕、石刻与楹联，兼具防御、居住与文化展示功能，建筑艺术与历史价值极高，为世界文化遗产核心建筑。"
      },
      "如升楼": {
          img: "images/如升楼.jpg",
          desc: "如升楼坐落于洪坑土楼群内，是一座小巧精致的袖珍圆形土楼，因形似旧时量米筒而得名。楼体直径小、层数少，结构紧凑，虽规模不大却功能完备，体现了客家土楼因地制宜、灵活建造的特点。如升楼造型玲珑可爱，保存完好，与周边大型土楼形成鲜明对比，成为土楼群落中极具特色的微型建筑代表。"
      },
      "福裕楼": {
          img: "images/福裕楼.jpg",
          desc: "福裕楼位于洪坑土楼群，是五凤楼形制的经典代表，为典型的庭院式方形土楼。建筑整体高低错落，主次分明，屋顶飞檐翘角，具有鲜明的中原府第式建筑特征。楼内分单元居住，既保持宗族聚居格局，又兼顾各家庭私密性，装饰精美，布局严谨，是客家土楼与传统宫殿式建筑融合的杰出范例。"
      },
      "奎聚楼": {
          img: "images/奎聚楼.jpg",
          desc: "奎聚楼位于洪坑土楼群，依山而建，层层递进，气势雄伟，远望酷似布达拉宫，因此也被称为“小布达拉宫”。建筑为方形土楼，利用山地高差形成错落格局，夯土墙厚实坚固，内部空间层次丰富。奎聚楼既满足聚居与防御需求，又注重风水布局与环境协调，是客家山地土楼建筑的杰出代表。"
      },
      "集庆楼": {
          img: "images/集庆楼.jpg",
          desc: "集庆楼位于初溪土楼群，始建于明代，是永定现存最古老的圆形土楼之一。楼体结构独特，全楼设有数十部楼梯，各单元相对独立又相互连通，既便于生活又利于防御。墙体由生土夯筑而成，历经数百年风雨依然稳固，内部保留大量历史遗迹，是研究明代客家土楼建造技术与聚落文化的珍贵实物。"
      },
      "承启楼": {
          img: "images/承启楼.jpg",
          desc: "承启楼位于高北土楼群，号称“土楼王”，是福建规模最大、结构最完整的圆形土楼之一。建筑由四环建筑组成，环环相套，最多可容纳近千人居住，内部厅堂、水井、院落一应俱全。承启楼建造技艺精湛，布局宏大规整，体现了客家先民团结聚居、防御自保的生活理念，文化价值与象征意义极高。"
      },
      "世泽楼": {
          img: "images/世泽楼.jpg",
          desc: "世泽楼位于高北土楼群，紧邻承启楼，为方形土楼建筑，历史悠久，保存完好。楼体墙体厚实坚固，内部结构简洁实用，体现客家传统民居稳重质朴的风格。世泽楼与承启楼相互呼应，共同构成高北土楼群核心景观，是研究大型土楼聚落布局与宗族居住形态的重要实例。"
      },
      "振福楼": {
          img: "images/振福楼.jpg",
          desc: "振福楼位于永定区，是一座秀丽典雅的圆形土楼，建筑风格清秀精致，环境清幽。楼体夯筑工艺精良，结构稳固，内部布局合理，兼具居住与防御功能。振福楼虽规模适中，却在细节处体现高超的建筑技艺，是客家中小型土楼的优秀代表，具有较高的艺术与民俗价值。"
      },
      "衍香楼": {
          img: "images/衍香楼.jpg",
          desc: "衍香楼地处永定湖坑镇，是一座文化气息浓厚的圆形土楼，以“诗书传家”为理念，楼内多处保留劝学楹联与题刻。楼体结构规整，环境雅致，居住空间舒适，体现了客家宗族重视文教的传统。衍香楼造型端庄，保存完好，是兼具居住功能与人文内涵的典型土楼建筑。"
      },
      "和贵楼": {
          img: "images/和贵楼.jpg",
          desc: "和贵楼位于南靖云水谣，是建在沼泽地上的大型方形土楼，被誉为“天下奇楼”。楼体以松木打桩为基，历经两百余年依然稳固不沉，建筑奇迹令人称奇。楼内空间开阔，设有学堂与天井，布局严谨，既体现客家先民高超的营造智慧，又展现了坚韧务实的生存理念，是土楼建筑史上的特殊典范。"
      },
      "怀远楼": {
          img: "images/怀远楼.jpg",
          desc: "怀远楼位于云水谣古镇，是南靖土楼中工艺最精美、文化气息最浓厚的圆形土楼之一。楼体保存完好，内部雕梁画栋，楹联雅致，中心设有学堂，崇尚诗书礼仪。建筑结构紧凑合理，防御功能完备，居住环境舒适，完美体现了客家民居实用与美学并重、文化与居住共生的特点，为世界文化遗产重要组成部分。"
      },
      "裕昌楼": {
          img: "images/裕昌楼.jpg",
          desc: "裕昌楼位于南靖县，俗称“东倒西歪楼”，始建于元代，是现存最古老的土楼之一。楼内木柱倾斜却历经数百年不倒，结构奇特，堪称建筑奇观。虽内部梁柱歪斜，整体结构依然稳固，兼具居住与防御功能。裕昌楼以其独特的建筑形态与传奇历史，成为福建土楼中极具观赏性与研究价值的特殊实例。"
      },
      "二宜楼": {
          img: "images/二宜楼.jpg",
          desc: "二宜楼位于华安县大地土楼群，号称“土楼之王”，是福建大型圆形土楼的杰出代表。楼体规模宏大，内部空间复杂，保存大量清代壁画、木雕与题记，文化信息极为丰富。建筑防御体系严密，生活设施完备，体现了客家先民高超的夯土技艺与聚居智慧，是研究清代土楼建筑与宗族社会的珍贵实物遗存。"
      },
      "南阳楼": {
          img: "images/南阳楼.jpg",
          desc: "南阳楼位于华安大地土楼群，紧邻二宜楼，为圆形土楼建筑，风格古朴稳重，结构坚固。楼体保存完好，内部布局规整，体现典型客家夯土建筑特色。南阳楼与二宜楼、东阳楼形成组合聚落，共同展现了华安土楼的营造技艺与宗族聚居形态，具有重要的历史与建筑研究价值。"
      },
      "东阳楼": {
          img: "images/东阳楼.jpg",
          desc: "东阳楼地处华安大地土楼群，为方形土楼，与二宜楼、南阳楼共同构成完整楼群。建筑风格朴素大气，墙体厚实，内部院落宽敞，兼具防御与居住功能。东阳楼整体保存完好，真实反映了客家方形土楼的结构特点与建造技艺，是大地土楼群不可或缺的组成部分。"
      },
      "升平楼": {
          img: "images/升平楼.jpg",
          desc: "升平楼位于华安县上坪土楼群，是一座风格独特的异形土楼，建筑形态不同于常见圆楼与方楼，造型别具一格。楼体依山而建，夯筑坚固，体现山区客家民居因地制宜的建造特点。升平楼历史悠久，保留原始风貌，是研究华安土楼多样性与地域建筑特色的重要实例。"
      },
      "庄上大楼": {
          img: "images/庄上大楼.jpg",
          desc: "庄上大楼位于平和县庄上土楼群，是闽西南规模宏大的方形土楼代表之一。楼体高大雄伟，墙体厚实，内部空间开阔，可容纳大量族人聚居，防御功能极强。建筑整体风格厚重朴实，保留典型客家夯土工艺，真实展现了山区客家聚落安全实用的营造理念，具有重要历史与民俗价值。"
      },
      "永庆楼": {
          img: "images/永庆楼.jpg",
          desc: "永庆楼位于南靖河坑土楼群，是楼群中代表性土楼之一，建筑形制规整，结构稳固，保存状况良好。楼体为传统夯土筑造，兼具居住与防御功能，体现客家土楼实用坚固的特点。永庆楼与周边土楼共同构成北斗七星布局，是河坑土楼群整体景观的重要组成部分。"
      }
  };

  // ECharts配置项
  var option = {
      title: {
          text: "福建土楼·地区—形制—土楼群/单体 桑基图",
          left: "center",
          textStyle: { 
              fontSize: 18, 
              fontWeight: "bold",
              color: '#8B4513'
          }
      },
      tooltip: {
          trigger: "item",
          formatter: function(params) {
              var name = params.name;
              if (buildingInfo[name]) {
                  return ''; // 自定义悬浮窗接管，隐藏默认tooltip
              } else {
                  return params.name + '<br/>数量：' + params.value;
              }
          },
          backgroundColor: '#3E3A38',
          textStyle: { color: '#fff' },
          borderColor: '#D2B48C'
      },
      backgroundColor: '#faf6f0',
      layoutAnimation: true,
      series: [{
          type: "sankey",
          draggable: true,
          nodeWidth: 25,
          nodeGap: 30,
          orient: "horizontal",
          nodeAlign: "justify",
          itemStyle: {
      borderWidth: 0  // 去掉节点边框
  },
          
          // 节点数据
          data: [
            { name: "永定区", itemStyle: { color: '#6B655F' } },
            { name: "南靖县", itemStyle: { color: '#59544E' } },
            { name: "华安县", itemStyle: { color: '#4E4A45' } },
            { name: "平和县", itemStyle: { color: '#44403C' } },
            { name: "圆形土楼", itemStyle: { color: '#D2B48C' } },
            { name: "方形土楼", itemStyle: { color: '#BC9F77' } },
            { name: "五凤楼", itemStyle: { color: '#A67C52' } },
            { name: "异形土楼", itemStyle: { color: '#8B4513' } },
            { name: "洪坑土楼群", itemStyle: { color: '#B7683A' } },
            { name: "初溪土楼群", itemStyle: { color: '#AB582E' } },
            { name: "高北土楼群", itemStyle: { color: '#9F4D25' } },
            { name: "田螺坑土楼群", itemStyle: { color: '#94421C' } },
            { name: "云水谣土楼群", itemStyle: { color: '#883613' } },
            { name: "河坑土楼群", itemStyle: { color: '#7C2D0D' } },
            { name: "大地土楼群", itemStyle: { color: '#B7683A' } },
            { name: "上坪土楼群", itemStyle: { color: '#AB582E' } },
            { name: "庄上土楼群", itemStyle: { color: '#9F4D25' } },
            { name: "振成楼", itemStyle: { color: '#94421C' } },
            { name: "如升楼", itemStyle: { color: '#883613' } },
            { name: "福裕楼", itemStyle: { color: '#7C2D0D' } },
            { name: "奎聚楼", itemStyle: { color: '#B7683A' } },
            { name: "集庆楼", itemStyle: { color: '#AB582E' } },
            { name: "承启楼", itemStyle: { color: '#9F4D25' } },
            { name: "世泽楼", itemStyle: { color: '#94421C' } },
            { name: "振福楼", itemStyle: { color: '#883613' } },
            { name: "衍香楼", itemStyle: { color: '#7C2D0D' } },
            { name: "和贵楼", itemStyle: { color: '#B7683A' } },
            { name: "怀远楼", itemStyle: { color: '#AB582E' } },
            { name: "裕昌楼", itemStyle: { color: '#9F4D25' } },
            { name: "二宜楼", itemStyle: { color: '#94421C' } },
            { name: "南阳楼", itemStyle: { color: '#883613' } },
            { name: "东阳楼", itemStyle: { color: '#7C2D0D' } },
            { name: "升平楼", itemStyle: { color: '#B7683A' } },
            { name: "庄上大楼", itemStyle: { color: '#AB582E' } },
            { name: "永庆楼", itemStyle: { color: '#9F4D25' } }
        ],
        // 桑基图链路数据
        links: [
            { source: "永定区", target: "圆形土楼", value: 19 },
            { source: "永定区", target: "方形土楼", value: 58 },
            { source: "永定区", target: "五凤楼", value: 3 },
            { source: "永定区", target: "异形土楼", value: 2 },
            { source: "南靖县", target: "圆形土楼", value: 34 },
            { source: "南靖县", target: "方形土楼", value: 28 },
            { source: "南靖县", target: "异形土楼", value: 3 },
            { source: "南靖县", target: "五凤楼", value: 3 },
            { source: "华安县", target: "圆形土楼", value: 2 },
            { source: "华安县", target: "方形土楼", value: 2 },
            { source: "华安县", target: "异形土楼", value: 2 },
            { source: "平和县", target: "方形土楼", value: 8 },
            { source: "平和县", target: "异形土楼", value: 1 },
            { source: "圆形土楼", target: "洪坑土楼群", value: 10 },
            { source: "方形土楼", target: "洪坑土楼群", value: 25 },
            { source: "异形土楼", target: "洪坑土楼群", value: 2 },
            { source: "五凤楼", target: "洪坑土楼群", value: 3 },
            { source: "圆形土楼", target: "初溪土楼群", value: 5 },
            { source: "方形土楼", target: "初溪土楼群", value: 31 },
            { source: "圆形土楼", target: "高北土楼群", value: 2 },
            { source: "方形土楼", target: "高北土楼群", value: 2 },
            { source: "圆形土楼", target: "田螺坑土楼群", value: 3 },
            { source: "方形土楼", target: "田螺坑土楼群", value: 1 },
            { source: "异形土楼", target: "田螺坑土楼群", value: 1 },
            { source: "圆形土楼", target: "云水谣土楼群", value: 25 },
            { source: "方形土楼", target: "云水谣土楼群", value: 20 },
            { source: "异形土楼", target: "云水谣土楼群", value: 1 },
            { source: "五凤楼", target: "云水谣土楼群", value: 3 },
            { source: "圆形土楼", target: "河坑土楼群", value: 6 },
            { source: "方形土楼", target: "河坑土楼群", value: 7 },
            { source: "异形土楼", target: "河坑土楼群", value: 1 },
            { source: "圆形土楼", target: "大地土楼群", value: 2 },
            { source: "方形土楼", target: "大地土楼群", value: 1 },
            { source: "方形土楼", target: "上坪土楼群", value: 1 },
            { source: "异形土楼", target: "上坪土楼群", value: 2 },
            { source: "方形土楼", target: "庄上土楼群", value: 8 },
            { source: "异形土楼", target: "庄上土楼群", value: 1 },
            { source: "洪坑土楼群", target: "振成楼", value: 1 },
            { source: "洪坑土楼群", target: "如升楼", value: 1 },
            { source: "洪坑土楼群", target: "福裕楼", value: 1 },
            { source: "洪坑土楼群", target: "奎聚楼", value: 1 },
            { source: "初溪土楼群", target: "集庆楼", value: 1 },
            { source: "高北土楼群", target: "承启楼", value: 1 },
            { source: "高北土楼群", target: "世泽楼", value: 1 },
            { source: "云水谣土楼群", target: "和贵楼", value: 1 },
            { source: "云水谣土楼群", target: "怀远楼", value: 1 },
            { source: "田螺坑土楼群", target: "裕昌楼", value: 1 },
            { source: "大地土楼群", target: "二宜楼", value: 1 },
            { source: "大地土楼群", target: "南阳楼", value: 1 },
            { source: "大地土楼群", target: "东阳楼", value: 1 },
            { source: "上坪土楼群", target: "升平楼", value: 1 },
            { source: "庄上土楼群", target: "庄上大楼", value: 1 },
            { source: "河坑土楼群", target: "永庆楼", value: 1 },
            { source: "圆形土楼", target: "振福楼", value: 1 },
            { source: "圆形土楼", target: "衍香楼", value: 1 }
        ],
          // 链路样式
          lineStyle: { 
              color: "source", 
              curveness: 0.5,
              opacity: 0.6
          },
          // 节点文字样式
          label: { 
              fontSize: 12,
              color: '#3E3A38'
          }
      }]
  };

  // 设置配置项并渲染图表
  myChart.setOption(option);

  // 响应式适配窗口大小变化
  window.addEventListener('resize', () => myChart.resize());

  // 自定义悬浮窗逻辑：靠近边缘自动换向
  myChart.on('mousemove', function (params) {
      var name = params.name;
      if (!buildingInfo[name]) {
          customTip.style.display = 'none';
          return;
      }

      // 填充悬浮窗内容
      customTip.innerHTML = `
          <img src="${buildingInfo[name].img}" alt="${name}">
          <div><strong>${name}</strong></div>
          <div style="margin-top:4px;">${buildingInfo[name].desc}</div>
      `;
      customTip.style.display = 'block';

      // 延迟获取浮窗宽高
      setTimeout(() => {
          var chartRect = document.getElementById('sangji-chart').getBoundingClientRect();
          var tipW = customTip.offsetWidth;
          var tipH = customTip.offsetHeight;

          // 鼠标在图表内的相对坐标
          var x = params.event.offsetX;
          var y = params.event.offsetY;

          // 页面绝对坐标
          var pageX = chartRect.left + x;
          var pageY = chartRect.top + y;

          // 判断是否超出屏幕边界
          var rightOverflow = pageX + tipW + 20 > window.innerWidth;
          var bottomOverflow = pageY + tipH + 20 > window.innerHeight;

          var finalX, finalY;

          // 水平方向：超出右边界则向左显示，否则向右
          if (rightOverflow) {
              finalX = pageX - tipW - 15;
          } else {
              finalX = pageX + 20;
          }

          // 垂直方向：超出下边界则向上显示，否则向下
          if (bottomOverflow) {
              finalY = pageY - tipH - 15;
          } else {
              finalY = pageY + 20;
          }

          // 设置悬浮窗位置
          customTip.style.left = finalX + 'px';
          customTip.style.top = finalY + 'px';
      }, 10);
  });

  // 鼠标离开节点时隐藏悬浮窗
  myChart.on('mouseout', function () {
      customTip.style.display = 'none';
  });
}