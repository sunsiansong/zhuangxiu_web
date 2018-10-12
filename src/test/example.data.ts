import { Case } from "../app/common/model/case.model";
import { Post } from "../app/common/model/post.model";
import { VisitorLeaveWords } from "../app/common/model/visitor-leave-words.model";
import { Config } from "../app/common/model/config.model";
import { UserLike } from "../app/common/model/like.model";

export const MOCK_CASES: Case[] = [
    {
        id: 233,
        title: '小户型之王',
        coverImageUrl: 'https://via.placeholder.com/350x150',
        summary: '其实我一定也不懂装修',
        viewCount: 666,
        tags: ['日式风格', '小户型']
    },
    {
        id: 233,
        title: '大开间的灵活应用',
        coverImageUrl: 'https://via.placeholder.com/350x150',
        summary: '其实我一定也不懂装修66666',
        viewCount: 666,
        tags: ['日式风格', '创意']
    },
    {
        id: 233,
        title: '其实我想要个别墅',
        coverImageUrl: 'https://via.placeholder.com/350x150',
        summary: '其实我一定也不懂装修23333',
        viewCount: 666,
        tags: ['日式风格', '美式', '其他']
    },
    {
        id: 233,
        title: '独栋别墅',
        coverImageUrl: 'https://via.placeholder.com/350x150',
        summary: '其实我一定也不懂装修',
        viewCount: 666,
        tags: ['日式风格', '小户型']
    },
    {
        id: 233,
        title: '复合功能建筑设计',
        coverImageUrl: 'https://via.placeholder.com/350x150',
        summary: '其实我一定也不懂装修66666',
        viewCount: 666,
        tags: ['日式风格', '创意']
    },
    {
        id: 233,
        title: '我只是不想看到重复的东西。。。',
        coverImageUrl: 'https://via.placeholder.com/350x150',
        summary: '其实我一定也不懂装修23333',
        viewCount: 666,
        tags: ['日式风格', '美式', '其他']
    },
];


export const MOCK_POSTS_NEWS: Post[] = [
    {
        id: 233,
        title: '北市区新店开业啦，欢迎砸场',
        viewCount: 999,
        tags: [],
        topped: true,
        createDate: new Date
    },
    {
        id: 233,
        title: '老板娘和小姨子男友跑了,无心经营,休业一天「哭」',
        viewCount: 999,
        tags: [],
        topped: false,
        createDate: new Date
    },
    {
        id: 233,
        title: '老板生日，特举行到店送大米活动！',
        viewCount: 999,
        tags: [],
        topped: false,
        createDate: new Date
    },
    {
        id: 233,
        title: '打折打折，全场打断为止',
        viewCount: 999,
        tags: [],
        topped: false,
        createDate: new Date
    },
    {
        id: 233,
        title: '网站上线了，看看我技术好么？。。。好的话给我介绍工作。。。',
        viewCount: 999,
        tags: [],
        topped: false,
        createDate: new Date
    }
];


export const MOCK_POSTS_ARTICLES: Post[] = [
    {
        id: 233,
        title: '紧急：XX地板有毛病，快换',
        viewCount: 999,
        tags: [],
        topped: true,
        createDate: new Date
    },
    {
        id: 233,
        title: '不转不是中国人',
        viewCount: 999,
        tags: [],
        topped: false,
        createDate: new Date
    },
    {
        id: 233,
        title: 'DIY，换桌子',
        viewCount: 999,
        tags: [],
        topped: false,
        createDate: new Date
    },
    {
        id: 233,
        title: '说来你可能不信，这个牌子的瓷砖可以让你省一半钱',
        viewCount: 999,
        tags: [],
        topped: false,
        createDate: new Date
    },
    {
        id: 233,
        title: '看看这个农村别墅，可6了，要是我有一块地，我也这么干',
        viewCount: 999,
        tags: [],
        topped: false,
        createDate: new Date
    }
];


export const MOCK_CONFIG_MAP = {
    slogan: `“装饰的灵魂是设计，
    设计的灵魂是文化,设计就是以人为本。
    遵守自然法则，缔造经典家装。”
            -- 哥白尼2
    `
};

export const MOCK_CONFIGS: {[key: string]: Config} = {
    jobs: {
        key: 'jobs',
        val: '招设计师，招施工监理，招CEO，招老板娘，招招招，什么都招'
    },
    address: {
        key: 'address',
        val: '昆明市中心'
    },
    contact: {
        key: 'contact',
        val: 'tel: 12306, email: xxx@xxx.cn, '
    },
    team: {
        key: 'team',
        val: '我们老大以前是混场子的，就问你怕不怕？？ '
    },
    culture: {
        key: 'culture',
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
                    <p class="idea_txt"><span class="dot">·</span>注重企业责任，用心服务，关爱社会、回馈社会，赢得社会尊敬</p>
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
        key: 'corpInfo',
        val: `<div class="service_item service_board">
        <p class="txt">
            腾讯，1998年11月诞生于中国深圳，是一家以互联网为基础的科技与文化公司。我们的使命是“通过互联网服务提升人类生活品质”。腾讯秉承着 “一切以用户价值为依归”的经营理念，为亿万网民提供优质的互联网综合服务。
        </p>
        <br>
        <p class="txt">
            腾讯的战略目标是“连接一切”，我们长期致力于社交平台与数字内容两大核心业务：一方面通过微信与QQ等社交平台，实现人与人、服务及设备的智慧连接；另一方面为数以亿计的用户提供优质的新闻、视频、游戏、音乐、文学、动漫、影业等数字内容产品及相关服务。我们还积极推动金融科技的发展，通过普及移动支付等技术能力，为智慧交通、智慧零售、智慧城市等领域提供有力支持。
        </p>
        <br>
        <p class="txt">
            腾讯希望成为各行各业的数字化助手，助力数字中国建设。在工业、医疗、零售、教育等各个领域，腾讯为传统行业的数字化转型升级提供“数字接口”和“数字工具箱”。我们秉持数字工匠精神，希望用数字创新提升每个人的生活品质。随着“互联网+”战略实施和数字经济的发展，我们通过战略合作与开放平台，与合作伙伴共建数字生态共同体，推进云计算、大数据、人工智能等前沿科技与各行各业的融合发展及创新共赢。多年来，腾讯的开放生态带动社会创业就业人次达数千万，相关创业企业估值已达数千亿元。
        </p>
        <br>
        <p class="txt">
            腾讯的愿景是成为“最受尊敬的互联网企业”。我们始终坚守“科技向善”的初心，运用科技手段助力公益事业发展，并将社会责任融入每一个产品。2007年，腾讯倡导并发起了中国互联网第一家在民政部注册的全国性非公募基金会——腾讯公益慈善基金会。腾讯公益致力于成为“人人可公益的创连者”，以互联网核心能力推动公益行业的长远发展为己任。腾讯公益联合多方发起了中国首个互联网公益日——99公益日，帮助公益组织和广大爱心网友、企业之间形成良好的公益生态，让透明化的“指尖公益”融入亿万网民的生活。
            </p><p>
    </p></div>`
    }
};

export const MOCK_VISITOR_LEAVE_WORDS: VisitorLeaveWords[] = [
    {
        name: '张老板',
        content: '小李可以的，画的图很好看，施工也到位，很满意',
        createDate: new Date
    },
    {
        name: '孙先生',
        content: '老孙到此一游',
        createDate: new Date
    },
    {
        name: '脑洞哥',
        content: '女娲都补不了哥的寂寞',
        createDate: new Date
    },
    {
        name: '健身房刘总',
        content: '我家的健身房就是这个公司弄的，自从用了你们的设计，客源 UP UP UP,今晚务必给你们员工加鸡腿',
        createDate: new Date
    },
    {
        name: '淘宝小仙女',
        createDate: new Date,
        // tslint:disable-next-line:max-line-length
        content: '好评好评，因为我好看，所以穿着也好看，哈哈哈哈哈哈哈哈哈(ಡωಡ)hiahiahia(ಡωಡ)hiahiahia。朋友都说好看，配个牛仔外套或者休闲的外套都可以，弹力大，修身，反正就是喜欢。就怕多穿两次变形。但是还是很喜欢。变形了再买，哈哈哈哈(ಡωಡ)hiahiahia喜欢喜欢喜欢喜欢。'
    },
    {
        name: '某水军',
        content: '666',
        createDate: new Date
    },
    {
        name: '贾布斯',
        content: 'These gays totaly redefined zhuangxiu',
        createDate: new Date
    },
    {
        name: '仙女2',
        content: '漂亮，显身材',
        createDate: new Date
    },
    {
        name: '我',
        content: '这个啊，录个1080p+果然是吃机器，风扇哗哗的响，要不是买了apple care+,还是会心疼的',
        createDate: new Date
    },
    {
        name: '淘宝小马',
        content: '一身穿上超温柔 修身的连衣裙很好穿 搭这个针织衫或者牛仔外套都可以 左边有个开叉的小设计 长度的话我身高169穿上刚好到膝盖 刚刚好的长度 防走光裤都可以不用穿 胸前是小V领 隐约的小性感 总之就是很喜欢~下面搭个小白鞋或者平底单鞋都可以',
        createDate: new Date
    },
];

export const MOCK_USER_LIKES: UserLike[] = [
    {
        title: '大开间的灵活应用',
        type: '设计稿',
        refId: 233,
        url: '',
        createTime: new Date,
    },
    {
        title: '复合功能建筑设计'    ,
        type: '设计稿',
        refId: 233,
        url: '',
        createTime: new Date,
    },
    {
        title: '说来你可能不信，这个牌子的瓷砖可以让你省一半钱',
        type: '文章',
        refId: 233,
        url: '',
        createTime: new Date,
    },
    {
        title: '看看这个农村别墅，可6了，要是我有一块地，我也这么干',
        type: '文章',
        refId: 233,
        url: '',
        createTime: new Date,
    },
];

