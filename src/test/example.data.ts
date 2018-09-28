import { Case } from "../app/common/model/case.model";
import { Post } from "../app/common/model/post.model";
import { VisitorLeaveWords } from "../app/common/model/visitor-leave-words.model";

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

