import { Case, Post, Config, VisitorLeaveWords, UserLike } from "@local/frontend-api-spec";

export const MOCK_CASES: Case[] = [
  {
    id: 233,
    title: "小户型大花样",
    coverImageUrl: "https://via.placeholder.com/800x450",
    summary: "其实我一定也不懂装修",
    viewCount: 666,
    tags: ["日式风格", "小户型"]
  },
  {
    id: 233,
    title: "你可能对大开间有误解",
    coverImageUrl: "https://via.placeholder.com/800x450",
    summary: "其实我一定也不懂装修66666",
    viewCount: 666,
    tags: ["日式风格", "创意"]
  },
  {
    id: 233,
    title: "其实我想要个别墅",
    coverImageUrl: "https://via.placeholder.com/450x450",
    summary: "其实我一定也不懂装修23333",
    viewCount: 666,
    tags: ["日式风格", "美式", "其他"]
  },
  {
    id: 233,
    title: "独栋别墅",
    coverImageUrl: "https://via.placeholder.com/350x150",
    summary: "其实我一定也不懂装修",
    viewCount: 666,
    tags: ["日式风格", "小户型"]
  },
  {
    id: 233,
    title: "复合功能建筑设计",
    coverImageUrl: "https://via.placeholder.com/350x150",
    summary: "其实我一定也不懂装修66666",
    viewCount: 666,
    tags: ["日式风格", "创意"]
  },
  {
    id: 233,
    title: "我只是不想看到重复的东西。。。",
    coverImageUrl: "https://via.placeholder.com/350x150",
    summary: "其实我一定也不懂装修23333",
    viewCount: 666,
    tags: ["日式风格", "美式", "其他"]
  }
];

export const MOCK_POSTS_NEWS: Post[] = [
  {
    id: 233,
    title: "北市区新店开业啦，欢迎砸场",
    viewCount: 999,
    tags: [],
    topped: true,
    createDate: new Date()
  },
  {
    id: 233,
    title: "老板娘和小姨子男友跑了,无心经营,休业一天「哭」",
    viewCount: 999,
    tags: [],
    topped: false,
    createDate: new Date()
  },
  {
    id: 233,
    title: "老板生日，特举行到店送大米活动！",
    viewCount: 999,
    tags: [],
    topped: false,
    createDate: new Date()
  },
  {
    id: 233,
    title: "打折打折，全场打断为止",
    viewCount: 999,
    tags: [],
    topped: false,
    createDate: new Date()
  },
  {
    id: 233,
    title: "网站上线了，看看我技术好么？。。。好的话给我介绍工作。。。",
    viewCount: 999,

    tags: [],
    topped: false,
    createDate: new Date()
  }
];

export const MOCK_POSTS_ARTICLES: Post[] = [
  {
    id: 233,
    title: "紧急：XX地板有毛病，快换",
    viewCount: 999,
    tags: [],
    topped: true,
    createDate: new Date()
  },
  {
    id: 233,
    title: "不转不是中国人",
    viewCount: 999,
    tags: [],
    topped: false,
    createDate: new Date()
  },
  {
    id: 233,
    title: "DIY，换桌子",
    viewCount: 999,
    tags: [],
    topped: false,
    createDate: new Date()
  },
  {
    id: 233,
    title: "说来你可能不信，这个牌子的瓷砖可以让你省一半钱",
    viewCount: 999,
    tags: [],
    topped: false,
    createDate: new Date()
  },
  {
    id: 233,
    title: "看看这个农村别墅，可6了，要是我有一块地，我也这么干",
    viewCount: 999,
    tags: [],
    topped: false,
    createDate: new Date()
  }
];

export const MOCK_CONFIGS: { [key: string]: Config } = {
  addressGeo: {
    // TODO 考虑下地图名片直接用
    key: "addressGeo",
    val: "102.659744,24.95895",
    description: "公司坐标（高德地图配置），经纬度用,分隔"
  },
  sitename: {
    key: "sitename",
    val: "【AnguRar设计】"
  },
  slogan: {
    key: "slogan",
    val: `“装饰的灵魂是设计，
        设计的灵魂是文化,设计就是以人为本。
        遵守自然法则，缔造经典家装。”
            -- 鲁迅`
  },
  homeBannerBgImgSrc: {
    key: "homeBannerBgImgSrc",
    val: "/assets/images/bg.jpg",
    // val: '/assets/images/bg1.webp',
    // val: '/assets/images/bg2.webp',
    // val: '/assets/images/bg3.webp',
    // val: '/assets/images/bg4.jpg',
    description: "首页横幅背景图片url"
  },
  jobs: {
    key: "jobs",
    val: "招设计师，招施工监理，招CEO，招老板娘，招招招，什么都招"
  },
  weixin: {
    key: "weixin",
    val:
      "一起学习用angular做网站吧（by sun)(顺便说下，这个是测试数据账号不存在的。。）"
  },
  contactTxt: {
    key: "contactTxt",
    val:
      "顺便说下，我们公司周末不上班，麻烦不要打老板电话，老板还没有结婚，而且没有女朋友"
  },
  publicTransport: {
    key: "publicTransport",
    val:
      "乘11路到上面那个地方，地铁也行不过最后还是要坐11路公交，摩拜单车也行，小黄车不行，小黄车已经黄了"
  },
  address: {
    key: "address",
    val: "昆明市中心"
  },
  contact: {
    key: "contact",
    val: "tel: 12306, email: xxx@xxx.cn, "
  },
  team: {
    key: "team",
    val: "我们老大以前是混场子的，就问你怕不怕？？ "
  },
  culture: {
    key: "culture",
    val: `<div class="culture_item culture_idea" id="culture_idea" data-article="1">
        <div class="culture_title">
            <h2 class="title">核心理念</h2>
        </div>
        <div class="idea_box">
            <div class="box_row">
                <div class="idea_item idea_vision">
                    <img class="idea_img" src="../images/culture/idea_1.jpg" alt="愿景">
                    <h3 class="idea_tit">愿景</h3>
                    <h4 class="idea_subtit">最受尊敬的互联网企业</h4>
                    <p class="idea_txt"><span class="dot">·</span>不断倾听和满足用户需求，引导并超越用户需求，赢得用户尊敬</p>
                    <p class="idea_txt"><span class="dot">·</span>通过提升品牌形象，使员工具有高度企业荣誉感，赢得员工尊敬</p>
                    <p class="idea_txt"><span class="dot">·</span>推动互联网行业的健康发展，与合作伙伴共成长，赢得行业尊敬</p>
                    <p class="idea_txt"><span class="dot">·</span>注重企业责任，用心服务，关爱社会、回馈社会，赢得社会尊敬</p>·
                </div>
                <div class="idea_item idea_mission">
                    <img class="idea_img" src="../images/culture/idea_2.jpg" alt="使命">
                    <h3 class="idea_tit">使命</h3>
                    <h4 class="idea_subtit">通过互联网服务提升人类生活品质</h4>
                    <p class="idea_txt"><span class="dot">·</span>使产品和服务像水和电融入人们的生活，为人们带来便捷和愉悦</p>
                    <p class="idea_txt"><span class="dot">·</span>关注不同地域、群体，并针对不同对象提供差异化的产品和服务</p>
                    <p class="idea_txt"><span class="dot">·</span>打造开放共赢平台，与合作伙伴共同营造健康的互联网生态环境</p>
                </div>
            </div>
            <div class="box_row last">
                <div class="idea_item idea_manage">
                    <img class="idea_img" src="../images/culture/idea_3.jpg" alt="管理理念">
                    <h3 class="idea_tit">管理理念</h3>
                    <h4 class="idea_subtit">关心员工成长</h4>
                    <p class="idea_txt"><span class="dot">·</span>为员工提供良好的工作环境和激励机制</p>
                    <p class="idea_txt"><span class="dot">·</span>完善员工培养体系和职业发展通道，使员工与企业同步成长</p>
                    <p class="idea_txt"><span class="dot">·</span>充分尊重和信任员工，不断引导和鼓励，使其获得成就的喜悦</p>
                </div>
                <div class="idea_item idea_value">
                    <img class="idea_img" src="../images/culture/idea_4.jpg" alt="经营理念">
                    <h3 class="idea_tit">经营理念</h3>
                    <h4 class="idea_subtit">一切以用户价值为依归</h4>
                    <h3 class="idea_tit">价值观</h3>
                    <h4 class="idea_subtit">正直+进取+合作+创新</h4>
                </div>
            </div>
        </div>
    </div>`
  },
  info: {
    key: "corpInfo",
    val: `<div class="service_item service_board">
        <p class="txt">
            腾讯，1998年11月诞生于中国深圳，是一家以互联网为基础的科技与文化公司。我们的使命是“通过互联网服务提升人类生活品质”。腾讯秉承着 “一切以用户价值为依归”的经营理念，为亿万网民提供优质的互联网综合服务。
        </p>
        <br>
        <p class="txt">
            腾讯的战略目标是“连接一切”，我们长期致力于社交平台与数字内容两大核心业务：一方面通过微信与QQ等社交平台，实现人与人、服务及设备的智慧连接；
            另一方面为数以亿计的用户提供优质的新闻、视频、游戏、音乐、文学、动漫、影业等数字内容产品及相关服务。我们还积极推动金融科技的发展，通过普及移动支付等技术能力，为智慧交通、智慧零售、智慧城市等领域提供有力支持。
        </p>
        <br>
        <p class="txt">
            腾讯希望成为各行各业的数字化助手，助力数字中国建设。在工业、医疗、零售、教育等各个领域，腾讯为传统行业的数字化转型升级提供“数字接口”和“数字工具箱”。
            我们秉持数字工匠精神，希望用数字创新提升每个人的生活品质。随着“互联网+”战略实施和数字经济的发展，我们通过战略合作与开放平台，与合作伙伴共建数字生态共同体，推进云计算、大数据、人工智能等前沿科技与各行各业的融合发展及创新共赢。
            多年来，腾讯的开放生态带动社会创业就业人次达数千万，相关创业企业估值已达数千亿元。
        </p>
        <br>
        <p class="txt">
            腾讯的愿景是成为“最受尊敬的互联网企业”。我们始终坚守“科技向善”的初心，运用科技手段助力公益事业发展，并将社会责任融入每一个产品。
            2007年，腾讯倡导并发起了中国互联网第一家在民政部注册的全国性非公募基金会——腾讯公益慈善基金会。腾讯公益致力于成为“人人可公益的创连者”，以互联网核心能力推动公益行业的长远发展为己任。
            腾讯公益联合多方发起了中国首个互联网公益日——99公益日，帮助公益组织和广大爱心网友、企业之间形成良好的公益生态，让透明化的“指尖公益”融入亿万网民的生活。
            </p><p>
    </p></div>`
  }
};

export const MOCK_VISITOR_LEAVE_WORDS: VisitorLeaveWords[] = [
  {
    name: "张老板",
    content: "小李可以的，画的图很好看，施工也到位，很满意",
    createDate: new Date()
  },
  {
    name: "孙先生",
    content: "老孙到此一游",
    createDate: new Date()
  },
  {
    name: "脑洞哥",
    content: "女娲都补不了哥的寂寞",
    createDate: new Date()
  },
  {
    name: "健身房刘总",
    content:
      "我家的健身房就是这个公司弄的，自从用了你们的设计，客源 UP UP UP,今晚务必给你们员工加鸡腿",
    createDate: new Date()
  },
  {
    name: "淘宝小仙女",
    createDate: new Date(),
    // tslint:disable-next-line:max-line-length
    content:
      "好评好评，因为我好看，所以穿着也好看，哈哈哈哈哈哈哈哈哈(ಡωಡ)hiahiahia(ಡωಡ)hiahiahia。朋友都说好看，配个牛仔外套或者休闲的外套都可以，弹力大，修身，反正就是喜欢。就怕多穿两次变形。但是还是很喜欢。变形了再买，哈哈哈哈(ಡωಡ)hiahiahia喜欢喜欢喜欢喜欢。"
  },
  {
    name: "某水军",
    content: "666",
    createDate: new Date()
  },
  {
    name: "贾布斯",
    content: "These gays totaly redefined zhuangxiu",
    createDate: new Date()
  },
  {
    name: "仙女2",
    content: "漂亮，显身材",
    createDate: new Date()
  },
  {
    name: "我",
    content:
      "这个啊，录个1080p+果然是吃机器，风扇哗哗的响，要不是买了apple care+,还是会心疼的",
    createDate: new Date()
  },
  {
    name: "淘宝小马",
    content:
      "一身穿上超温柔 修身的连衣裙很好穿 搭这个针织衫或者牛仔外套都可以 左边有个开叉的小设计 长度的话我身高169穿上刚好到膝盖 刚刚好的长度 防走光裤都可以不用穿 胸前是小V领 隐约的小性感 总之就是很喜欢~下面搭个小白鞋或者平底单鞋都可以",
    createDate: new Date()
  }
];

export const MOCK_USER_LIKES: UserLike[] = [
  {
    title: "大开间的灵活应用",
    type: "设计稿",
    refId: 233,
    url: "",
    createTime: new Date()
  },
  {
    title: "复合功能建筑设计",
    type: "设计稿",
    refId: 233,
    url: "",
    createTime: new Date()
  },
  {
    title: "说来你可能不信，这个牌子的瓷砖可以让你省一半钱",
    type: "文章",
    refId: 233,
    url: "",
    createTime: new Date()
  },
  {
    title: "看看这个农村别墅，可6了，要是我有一块地，我也这么干",
    type: "文章",
    refId: 233,
    url: "",
    createTime: new Date()
  }
];

/** copied from http://www.shejiben.com/sjs/1365009/case-3685786-1.html, thx to ... */
export const MOCK_CASE_DETAIL: Case = {
  id: 233,
  title: "小户型大花样",
  coverImageUrl: "https://via.placeholder.com/800x450",
  summary: "其实我一定也不懂装修",
  viewCount: 666,
  tags: ["日式风格", "小户型"],
  detail: `<div class="caseDetail">
  <h4 class="caseTitle">春风十里|乾坤大挪移，老房子也有春天</h4>
  <div class="caseProperty">
      <span>参考造价：<em class="red">15万元</em></span><span class="del">|</span>
      <span>风格：混搭</span><span class="del">|</span>            <span>空间：小户型</span><span class="del">|</span>
      <span>面积：50平米</span><span class="del">|</span>
      <span>浏览数：2449</span>
  </div>
          <div class="caseDescription">
      <div class="desTitle"><strong>案例简介</strong> Case description</div>
      <div class="desIcon"></div>
      春水初生，春林初盛，春风十里不如你。<br>
——冯唐<br>
<br>
80后理工男与90 后文艺女的爱情故事，<br>
是什么样子的呢？<br>
<br>
第一次于工作室约谈的时候，<br>
他们手牵着手，穿着格子的情侣衫，<br>
期期艾艾的走进来。<br>
<br>
被问到设计需求时，<br>
会含情脉脉的看着对方，<br>
说，我听她（他）的。<br>
<br>
会很认真的跟我讨论家的每一个地方，<br>
他想要个小憩的榻榻米，<br>
她需要个梳妆台，<br>
她想要个大冰箱，<br>
我们需要个小厨房，<br>
洗衣机要怎么放？<br>
想要家里充满着阳光！<br>
…………<br>
<br>
两个人的婚礼后不久，<br>
屋子里红色的喜字还没有摘，<br>
我就赶着来蹭蹭喜气，<br>
于是，就有了这组完工照。        </div>
  <div class="imgContent">
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010102905-dd29032b-2s.jpg" data-id="3425582">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010102905-dd29032b-2s.jpg" data-id="3425582">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425582" src="https://pic.shejiben.com/case/2018/10/10/20181010102905-dd29032b-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false">
                              </div>
          <div class="imgDescription">这是一个户型方方正正的小房子，一室一厅的格局，缺陷比较多：<br>1、主卧的门与入户门斜对，位置不合理；主卧的小衣帽间占了部分空间，使得卫生间的利用率降低。<br>2、布局不合理，没有客厅的位置。<br>3、厨房空间小，橱柜无处安放，冰箱只能放在走廊，显得杂乱又拥挤；也没有用餐的地方。<br>4、卫生间狭小，洗衣机也只能放在走廊，没有地漏和插座，使用十分不方便，安全也没有保证。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010102856-866ec464-2s.jpg" data-id="3425581">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010102856-866ec464-2s.jpg" data-id="3425581">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425581" src="https://pic1.shejiben.com/case/2018/10/10/20181010102856-866ec464-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false">
                              </div>
          <div class="imgDescription">墙体拆改：<br>1、拆掉卫生间与小衣帽间的隔墙，合并成一个卫生间。<br>2、拆掉厨房的隔墙和门，开放厨房空间。<br>3、拆掉主卧室阳台的门窗，增大主卧室的空间；以及主卧室门。<br>4、在两个卧室之间拆一个门洞，让业主能够直接自客厅进入卧室。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010102841-79063826-2s.jpg" data-id="3425579">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010102841-79063826-2s.jpg" data-id="3425579">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425579" src="https://pic.shejiben.com/case/2018/10/10/20181010102841-79063826-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false">
                              </div>
          <div class="imgDescription">新建墙体：<br>1、将主卧靠近入户门一侧的墙封起来，同时往里侧移动，增大玄关和卫生间的空间。<br>2、新建卫生间的隔墙。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010102850-2fc62fdf-2s.jpg" data-id="3425580">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010102850-2fc62fdf-2s.jpg" data-id="3425580">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425580" src="https://pic.shejiben.com/case/2018/10/10/20181010102850-2fc62fdf-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false">
                              </div>
          <div class="imgDescription">整体格局重新规划：<br>1、卫生间格局扩大，根据新建墙体的形状，定制浴室柜，将滚筒洗衣机嵌在异形台面内，使卫生间的空间更加的整洁；定制柜可以存放杂物。<br>2、厨房的隔墙拆除后，厨房与玄关相连，定制鞋柜与冰箱、定制橱柜相连，形成L型的格局；集成灶放在靠窗的位置，有利于排油烟。<br>3、主卧室靠近入户门一侧的新建墙体内移，留出来的区域放置定制的玄关柜。<br>4、将其中一个卧室改为客厅，开通与主卧室相通的门洞后，同侧的墙体挂电视机；阳台是定制的榻榻米，定制的柜体可以隐藏壁挂空调，也有储物的功能；电视墙的对面放置一字沙发，靠近门的那边墙放置两人位的餐桌，实现餐客一体的格局，成功的开辟出了餐厅区域。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103350-5a94746b-2s.jpg" data-id="3425638">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103350-5a94746b-2s.jpg" data-id="3425638">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425638" src="https://pic1.shejiben.com/case/2018/10/10/20181010103350-5a94746b-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false">
                              </div>
          <div class="imgDescription">#玄关#鞋柜<br>入户门的右侧，放了定制的鞋柜，半米的高度，可以随手将包包、衣服放在上面。左侧，是卫生间的推拉门，不占空间。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103327-a34eca62-2s.jpg" data-id="3425636">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103327-a34eca62-2s.jpg" data-id="3425636">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425636" src="https://pic1.shejiben.com/case/2018/10/10/20181010103327-a34eca62-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103327-a34eca62-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
                      </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103335-b9226b67-2s.jpg" data-id="3425637">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103335-b9226b67-2s.jpg" data-id="3425637">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425637" src="https://pic1.shejiben.com/case/2018/10/10/20181010103335-b9226b67-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103335-b9226b67-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">#鞋柜#定制柜<br>入户门的对面，是专门开辟的空间放置定制柜，可以放出门常用的物品。旁边悬挂的全身镜，可以在出门前整理一下仪容，也不占空间。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103138-af916948-2s.jpg" data-id="3425615">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103138-af916948-2s.jpg" data-id="3425615">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425615" src="https://pic1.shejiben.com/case/2018/10/10/20181010103138-af916948-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103138-af916948-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">#客厅#榻榻米#沙发<br>进入客厅，第一眼就是阳台的榻榻米。骄阳似火的夏季，铺着凉席的榻榻米，坐在圆垫上，喝一杯冷饮，温凉、舒适。<br>悬挂的卷帘，高高低低的垂下来，十分的诗情画意。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103111-ee4e3e26-2s.jpg" data-id="3425612">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103111-ee4e3e26-2s.jpg" data-id="3425612">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425612" src="https://pic1.shejiben.com/case/2018/10/10/20181010103111-ee4e3e26-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103111-ee4e3e26-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">#客厅#榻榻米#定制柜<br>朋友来访，小住两日，还可以铺上床垫，加一床被褥，充当单人床使用。<br>与榻榻米相连双开门的柜子用来储物，上面留出余地较大的格子，用来遮挡空调，也不影响空调的风，美观且实用。<br>立柜的一侧做成了格子，可以放一些小摆件，也可以作为一个小型书架，放一些平时看的书籍。<br>绿萝女主人的爸爸养的，放在格子最高层，垂落下来，给小空间添了一抹绿意，增了生机和活力。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103120-50f75ec0-2s.jpg" data-id="3425613">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103120-50f75ec0-2s.jpg" data-id="3425613">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425613" src="https://pic1.shejiben.com/case/2018/10/10/20181010103120-50f75ec0-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103120-50f75ec0-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">#客厅#沙发<br>乳白色皮质沙发床，平时是放松时闲坐的沙发，来客时是休息的床，一物多用。<br>客厅的沙发背景墙刷了乳胶漆，层次分明，深浅不一的绿，搭配上豆绿色的壁灯，小清新感十足。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103128-e051c1ac-2s.jpg" data-id="3425614">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103128-e051c1ac-2s.jpg" data-id="3425614">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425614" src="https://pic1.shejiben.com/case/2018/10/10/20181010103128-e051c1ac-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103128-e051c1ac-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">#餐厅#餐桌#吊灯<br>客厅开辟出了一小块区域放餐桌。虽然没有做明显的分界，但颜色上有所区分，白色的餐椅上是浅灰色的座垫，与调节气氛的浅灰色小吊灯遥相呼应。餐桌是可以折叠的，占用空间并不大，上面还有两组抽屉，能满足储物的需要。墙壁上安置了储物木格，让白墙不再单调。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010103205-6eb64fda-2s.jpg" data-id="3425624">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010103205-6eb64fda-2s.jpg" data-id="3425624">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425624" src="https://pic.shejiben.com/case/2018/10/10/20181010103205-6eb64fda-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010103205-6eb64fda-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">#餐厅#<br>从阳台的方向可以看见冰箱和橱柜。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010104956-0672b0c3-2s.jpg" data-id="3425709">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010104956-0672b0c3-2s.jpg" data-id="3425709">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425709" src="https://pic.shejiben.com/case/2018/10/10/20181010104956-0672b0c3-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010104956-0672b0c3-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">#电视柜#<br>电视柜的宽度与右侧的墙面一样，合理的利用了空间。右侧空闲的墙面放了两人的婚纱照。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010103155-0d2a7154-2s.jpg" data-id="3425621">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010103155-0d2a7154-2s.jpg" data-id="3425621">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425621" src="https://pic.shejiben.com/case/2018/10/10/20181010103155-0d2a7154-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010103155-0d2a7154-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">电视柜上摆了小天鹅纸抽盒。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010105620-adb21ae7-2s.jpg" data-id="3425764">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010105620-adb21ae7-2s.jpg" data-id="3425764">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425764" src="https://pic1.shejiben.com/case/2018/10/10/20181010105620-adb21ae7-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010105620-adb21ae7-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">#主卧#床<br>主卧室的墙面是浅绿色，搭配淡灰色靠背的双人床。床头是简约风的挂画。叶子形状的圆形吊灯散发着荧荧光晕，氛围感十足。乳白色的梳妆台，柜腿是很有质感的金属质地，蝴蝶结靠背的圆形椅子，充满了女主人十足的少女心。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010105543-a509814a-2s.jpg" data-id="3425759">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010105543-a509814a-2s.jpg" data-id="3425759">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425759" src="https://pic1.shejiben.com/case/2018/10/10/20181010105543-a509814a-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010105543-a509814a-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">朝南的主卧，清晨醒来时，拉开布艺的窗帘，阳光洒在身上，温暖而舒适，可以让心情好上一整天。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010105549-6d8b1be6-2s.jpg" data-id="3425760">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010105549-6d8b1be6-2s.jpg" data-id="3425760">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425760" src="https://pic.shejiben.com/case/2018/10/10/20181010105549-6d8b1be6-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010105549-6d8b1be6-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">通透的空间。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010105611-d5f9210a-2s.jpg" data-id="3425763">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010105611-d5f9210a-2s.jpg" data-id="3425763">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425763" src="https://pic1.shejiben.com/case/2018/10/10/20181010105611-d5f9210a-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010105611-d5f9210a-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">整面墙的原木色定制衣柜，增大了储物空间，让卧室空间更加干净整洁。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010105602-e7eadb37-2s.jpg" data-id="3425762">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010105602-e7eadb37-2s.jpg" data-id="3425762">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425762" src="https://pic1.shejiben.com/case/2018/10/10/20181010105602-e7eadb37-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010105602-e7eadb37-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">里面做成了格子空间，推拉的柜门关闭时，它是衣柜整体的一部分，可以放一些凌乱的杂物；推拉门打开时，它可以当成床头柜使用。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010105536-65f6f369-2s.jpg" data-id="3425758">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010105536-65f6f369-2s.jpg" data-id="3425758">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425758" src="https://pic1.shejiben.com/case/2018/10/10/20181010105536-65f6f369-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010105536-65f6f369-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">梳妆台与阳台的小书桌。<br>#阳台#</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103306-c850d877-2s.jpg" data-id="3425634">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103306-c850d877-2s.jpg" data-id="3425634">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425634" src="https://pic1.shejiben.com/case/2018/10/10/20181010103306-c850d877-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103306-c850d877-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">#厨房#橱柜<br>浅绿色橱柜搭配异形石英石台面，靠窗的位置放燃气灶，整体形成了L型。墙面用了100*300的白色瓷砖通铺，整洁干净，地面是棕色的花砖，不规则的图案让空间的元素更加的丰富。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010103256-81ac574c-2s.jpg" data-id="3425633">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010103256-81ac574c-2s.jpg" data-id="3425633">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425633" src="https://pic.shejiben.com/case/2018/10/10/20181010103256-81ac574c-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010103256-81ac574c-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">#厨房#橱柜<br>厨房的吊柜是乳白色的，将把手放在下面，更方便开关柜门。中间做了格子出来，方便取用常用的厨具或者调料。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103358-f82f2e94-2s.jpg" data-id="3425639">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103358-f82f2e94-2s.jpg" data-id="3425639">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425639" src="https://pic1.shejiben.com/case/2018/10/10/20181010103358-f82f2e94-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103358-f82f2e94-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">#卫生间<br>虽然在空间规划的时候已经尽量放大卫生间区域，但卫生间区域还是很小。但是定制浴室柜解放了不少空间，马桶旁边的高柜考虑到旁边突出的墙体，设计的时候让它刚好嵌在里面，上面留出开放性的格子，方便物品的取用。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103430-146604e3-2s.jpg" data-id="3425646">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103430-146604e3-2s.jpg" data-id="3425646">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425646" src="https://pic1.shejiben.com/case/2018/10/10/20181010103430-146604e3-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103430-146604e3-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
                      </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103423-674bb0b1-2s.jpg" data-id="3425642">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103423-674bb0b1-2s.jpg" data-id="3425642">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425642" src="https://pic1.shejiben.com/case/2018/10/10/20181010103423-674bb0b1-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103423-674bb0b1-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">卫生间的整体配色沿袭了整个空间的小清新风格，浴室柜使用了原木色，吊柜则用了浅绿色。<br>洗脸盆单独购买，安装在石材台面上，异形的台面，另一端下方嵌入了滚筒洗衣机，与整个台面合而为一。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103406-64aa0ef2-2s.jpg" data-id="3425640">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103406-64aa0ef2-2s.jpg" data-id="3425640">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425640" src="https://pic1.shejiben.com/case/2018/10/10/20181010103406-64aa0ef2-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103406-64aa0ef2-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">考虑到使用花洒时水花四溅，在洗衣机的前面安了可伸缩的免打孔自粘杆，挂上防水布帘，避免溅到电器上，发生危险。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103415-a9fe971d-2s.jpg" data-id="3425641">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103415-a9fe971d-2s.jpg" data-id="3425641">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425641" src="https://pic1.shejiben.com/case/2018/10/10/20181010103415-a9fe971d-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103415-a9fe971d-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">将防水布帘拉上后。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103238-1b813a0e-2s.jpg" data-id="3425631">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103238-1b813a0e-2s.jpg" data-id="3425631">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425631" src="https://pic1.shejiben.com/case/2018/10/10/20181010103238-1b813a0e-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103238-1b813a0e-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">阳台是与客厅连在一起的，定制的榻榻米，用来储物。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103222-c529e41d-2s.jpg" data-id="3425629">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103222-c529e41d-2s.jpg" data-id="3425629">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425629" src="https://pic1.shejiben.com/case/2018/10/10/20181010103222-c529e41d-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103222-c529e41d-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">卷帘卷起的时候，它是开放的阳台空间，放上小木桌和圆座垫，喝茶浇花晒太阳，或者小憩看书都可以；卷帘放下的时候，它是个私密的单人空间，可以请好友小住一晚。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103214-aaf05849-2s.jpg" data-id="3425628">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103214-aaf05849-2s.jpg" data-id="3425628">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425628" src="https://pic1.shejiben.com/case/2018/10/10/20181010103214-aaf05849-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103214-aaf05849-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
                      </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010103247-ebc33a1d-2s.jpg" data-id="3425632">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010103247-ebc33a1d-2s.jpg" data-id="3425632">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425632" src="https://pic.shejiben.com/case/2018/10/10/20181010103247-ebc33a1d-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010103247-ebc33a1d-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">从客厅看向卧室的角度，打开门，绿色从客厅延伸至卧室</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103230-aefcfca4-2s.jpg" data-id="3425630">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103230-aefcfca4-2s.jpg" data-id="3425630">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425630" src="https://pic1.shejiben.com/case/2018/10/10/20181010103230-aefcfca4-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103230-aefcfca4-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">墙壁上的挂画，是工作室的设计师亲手画的，送给主人做新婚礼物，被男主人的妈妈挂在这里，恰到好处。</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010103441-014f7f9a-2s.jpg" data-id="3425649">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010103441-014f7f9a-2s.jpg" data-id="3425649">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425649" src="https://pic.shejiben.com/case/2018/10/10/20181010103441-014f7f9a-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010103441-014f7f9a-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">设计师手绘#<br>笔触细腻，颜色清新，与整个空间很搭！</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010102912-fc931245-2s.jpg" data-id="3425584">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010102912-fc931245-2s.jpg" data-id="3425584">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425584" src="https://pic.shejiben.com/case/2018/10/10/20181010102912-fc931245-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010102912-fc931245-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">装修前的客厅</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010102916-9078da8f-2s.jpg" data-id="3425585">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010102916-9078da8f-2s.jpg" data-id="3425585">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425585" src="https://pic.shejiben.com/case/2018/10/10/20181010102916-9078da8f-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010102916-9078da8f-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
                      </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103146-31c03b1e-2s.jpg" data-id="3425618">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103146-31c03b1e-2s.jpg" data-id="3425618">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425618" src="https://pic1.shejiben.com/case/2018/10/10/20181010103146-31c03b1e-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103146-31c03b1e-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">装修后的客厅</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010110210-0672b0c3-2s.jpg" data-id="3425775">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010110210-0672b0c3-2s.jpg" data-id="3425775">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425775" src="https://pic1.shejiben.com/case/2018/10/10/20181010110210-0672b0c3-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010110210-0672b0c3-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
                      </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010102921-8e4ba624-2s.jpg" data-id="3425586">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010102921-8e4ba624-2s.jpg" data-id="3425586">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425586" src="https://pic1.shejiben.com/case/2018/10/10/20181010102921-8e4ba624-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010102921-8e4ba624-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">装修前的卧室</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010102925-0f8a9d3d-2s.jpg" data-id="3425587">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010102925-0f8a9d3d-2s.jpg" data-id="3425587">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425587" src="https://pic.shejiben.com/case/2018/10/10/20181010102925-0f8a9d3d-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010102925-0f8a9d3d-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
                      </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010110311-6d8b1be6-2s.jpg" data-id="3425777">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010110311-6d8b1be6-2s.jpg" data-id="3425777">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425777" src="https://pic1.shejiben.com/case/2018/10/10/20181010110311-6d8b1be6-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010110311-6d8b1be6-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">装修后的卧室</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010102936-84f1a618-2s.jpg" data-id="3425591">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010102936-84f1a618-2s.jpg" data-id="3425591">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425591" src="https://pic1.shejiben.com/case/2018/10/10/20181010102936-84f1a618-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010102936-84f1a618-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">装修前的卧室——小衣帽间</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010110302-253b6a38-2s.jpg" data-id="3425776">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010110302-253b6a38-2s.jpg" data-id="3425776">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425776" src="https://pic.shejiben.com/case/2018/10/10/20181010110302-253b6a38-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010110302-253b6a38-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">装修后的卧室——一整面墙的衣柜</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010102929-4644d1c8-2s.jpg" data-id="3425588">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010102929-4644d1c8-2s.jpg" data-id="3425588">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425588" src="https://pic1.shejiben.com/case/2018/10/10/20181010102929-4644d1c8-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010102929-4644d1c8-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">装修前的主卧阳台</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010102933-fc2b1d85-2s.jpg" data-id="3425590">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010102933-fc2b1d85-2s.jpg" data-id="3425590">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425590" src="https://pic1.shejiben.com/case/2018/10/10/20181010102933-fc2b1d85-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010102933-fc2b1d85-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
                      </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010110318-5b6f164e-2s.jpg" data-id="3425778">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010110318-5b6f164e-2s.jpg" data-id="3425778">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425778" src="https://pic1.shejiben.com/case/2018/10/10/20181010110318-5b6f164e-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010110318-5b6f164e-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">装修后的主卧阳台</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010102948-9666a5e9-2s.jpg" data-id="3425594">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010102948-9666a5e9-2s.jpg" data-id="3425594">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425594" src="https://pic1.shejiben.com/case/2018/10/10/20181010102948-9666a5e9-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010102948-9666a5e9-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">装修前的厨房</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010102940-a5bbbff0-2s.jpg" data-id="3425592">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010102940-a5bbbff0-2s.jpg" data-id="3425592">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425592" src="https://pic.shejiben.com/case/2018/10/10/20181010102940-a5bbbff0-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010102940-a5bbbff0-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
                      </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103314-80e0b21a-2s.jpg" data-id="3425635">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103314-80e0b21a-2s.jpg" data-id="3425635">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425635" src="https://pic1.shejiben.com/case/2018/10/10/20181010103314-80e0b21a-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103314-80e0b21a-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">装修后的厨房</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010102944-8c8d5f85-2s.jpg" data-id="3425593">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010102944-8c8d5f85-2s.jpg" data-id="3425593">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425593" src="https://pic.shejiben.com/case/2018/10/10/20181010102944-8c8d5f85-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010102944-8c8d5f85-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">装修前的卫生间</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010110455-a7c4d28b-2s.jpg" data-id="3425783">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010110455-a7c4d28b-2s.jpg" data-id="3425783">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425783" src="https://pic.shejiben.com/case/2018/10/10/20181010110455-a7c4d28b-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010110455-a7c4d28b-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">装修后的卫生间</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010102958-829318e2-2s.jpg" data-id="3425602">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010102958-829318e2-2s.jpg" data-id="3425602">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425602" src="https://pic1.shejiben.com/case/2018/10/10/20181010102958-829318e2-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010102958-829318e2-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">定制橱柜</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010103004-874e3016-2s.jpg" data-id="3425603">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010103004-874e3016-2s.jpg" data-id="3425603">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425603" src="https://pic.shejiben.com/case/2018/10/10/20181010103004-874e3016-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010103004-874e3016-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
                      </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010102951-e1dede12-2s.jpg" data-id="3425597">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010102951-e1dede12-2s.jpg" data-id="3425597">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425597" src="https://pic1.shejiben.com/case/2018/10/10/20181010102951-e1dede12-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010102951-e1dede12-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
                      </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010103011-cf3e5f9d-2s.jpg" data-id="3425604">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010103011-cf3e5f9d-2s.jpg" data-id="3425604">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425604" src="https://pic.shejiben.com/case/2018/10/10/20181010103011-cf3e5f9d-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010103011-cf3e5f9d-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">定制榻榻米</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103019-4171c12f-2s.jpg" data-id="3425605">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103019-4171c12f-2s.jpg" data-id="3425605">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425605" src="https://pic1.shejiben.com/case/2018/10/10/20181010103019-4171c12f-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103019-4171c12f-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
                      </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103026-274c4818-2s.jpg" data-id="3425606">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103026-274c4818-2s.jpg" data-id="3425606">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425606" src="https://pic1.shejiben.com/case/2018/10/10/20181010103026-274c4818-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103026-274c4818-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">定制浴室柜</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103033-27d37edb-2s.jpg" data-id="3425607">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103033-27d37edb-2s.jpg" data-id="3425607">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425607" src="https://pic1.shejiben.com/case/2018/10/10/20181010103033-27d37edb-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103033-27d37edb-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
                      </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103040-293fd95c-2s.jpg" data-id="3425608">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103040-293fd95c-2s.jpg" data-id="3425608">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425608" src="https://pic1.shejiben.com/case/2018/10/10/20181010103040-293fd95c-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103040-293fd95c-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">主卧定制阳台衣柜&amp;书桌</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103048-9d38cf7e-2s.jpg" data-id="3425609">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103048-9d38cf7e-2s.jpg" data-id="3425609">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425609" src="https://pic1.shejiben.com/case/2018/10/10/20181010103048-9d38cf7e-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103048-9d38cf7e-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
                      </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic.shejiben.com/case/2018/10/10/20181010103056-69a50d6a-2s.jpg" data-id="3425610">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic.shejiben.com/case/2018/10/10/20181010103056-69a50d6a-2s.jpg" data-id="3425610">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425610" src="https://pic.shejiben.com/case/2018/10/10/20181010103056-69a50d6a-2s.jpg" data-original="https://pic.shejiben.com/case/2018/10/10/20181010103056-69a50d6a-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">主卧定制衣柜</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103103-00c1290b-2s.jpg" data-id="3425611">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103103-00c1290b-2s.jpg" data-id="3425611">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425611" src="https://pic1.shejiben.com/case/2018/10/10/20181010103103-00c1290b-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103103-00c1290b-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
                      </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103447-0e0358c4-2s.jpg" data-id="3425650">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103447-0e0358c4-2s.jpg" data-id="3425650">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425650" src="https://pic1.shejiben.com/case/2018/10/10/20181010103447-0e0358c4-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103447-0e0358c4-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">软装预算清单！</div>            </div>
                  <div class="caseImgList">
          <div class="wraps">
              <div class="case_btn">
                  <div class="question" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103448-3b33622a-2s.jpg" data-id="3425651">
                      <em class="icon icon_question"></em>
                      <a href="javascript:void(0);">提问</a>
                  </div>
                  <div class="collection" data-src="https://pic1.shejiben.com/case/2018/10/10/20181010103448-3b33622a-2s.jpg" data-id="3425651">
                      <em class="icon icon_collection"></em>
                      <a href="javascript:void(0);">收藏</a>
                  </div>
              </div>
          </div>

          <div>
                                  <img class="preview-box" data-id="3425651" src="https://pic1.shejiben.com/case/2018/10/10/20181010103448-3b33622a-2s.jpg" data-original="https://pic1.shejiben.com/case/2018/10/10/20181010103448-3b33622a-2s.jpg" alt="春风十里|乾坤大挪移，老房子也有春天" onselectstart="return false" ondragstart="return false" oncontextmenu="return false" style="display: inline;">
                              </div>
          <div class="imgDescription">主材预算清单！</div>            </div>
              </div>

  <!--  ta的相关作品 -->
          <div class="otherCase __web-inspector-hide-shortcut__">
      <h4>TA的其他作品</h4>
      <div class="otherCaseContent">
                          <div class="otherCaseList">
              <a href="http://www.shejiben.com/sjs/1365009/case-3676049-1.html"><img src="https://spic2.t8tcdn.com/case/2018/09/17/20180917185328-e6c276c8.jpg!394x394.jpg" width="320" height="320" alt="糕点店铺设计 | 祥禾饽饽铺二店"></a>
              <div class="caseName">糕点店铺设计 | 祥禾饽饽铺二店</div>
          </div>
                          <div class="otherCaseList">
              <a href="http://www.shejiben.com/sjs/1365009/case-3673228-1.html"><img src="https://spic2.t8tcdn.com/case/2018/09/12/20180912095410-479ceb47.jpg!394x394.jpg" width="320" height="320" alt="水绿微风"></a>
              <div class="caseName">水绿微风</div>
          </div>
                          <div class="otherCaseList">
              <a href="http://www.shejiben.com/sjs/1365009/case-3669446-1.html"><img src="https://spic2.t8tcdn.com/case/2018/09/04/20180904161704-5eacaa56.jpg!394x394.jpg" width="320" height="320" alt="在雕琢的时光里"></a>
              <div class="caseName">在雕琢的时光里</div>
          </div>
                          <div class="otherCaseList">
              <a href="http://www.shejiben.com/sjs/1365009/case-3664696-1.html"><img src="https://spic1.t8tcdn.com/case/2018/08/25/20180825182752-1262f838.jpg!394x394.jpg" width="320" height="320" alt="传统糕点铺设计 | 祥禾饽饽铺"></a>
              <div class="caseName">传统糕点铺设计 | 祥禾饽饽铺</div>
          </div>
                          <p class="clear"></p>
      </div>
  </div>
          <!--  ta的相关作品 END -->
</div>`
};
