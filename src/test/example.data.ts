import { Case } from "../app/common/model/case.model";
import { Post } from "../app/common/model/post.model";

export const MOCK_CASES: Case[] = [
    {
        title: '小户型之王',
        coverImageUrl: 'https://via.placeholder.com/350x150',
        summary: '其实我一定也不懂装修',
        viewCount: 666,
        tags: ['日式风格', '小户型']
    },
    {
        title: '大开间的灵活应用',
        coverImageUrl: 'https://via.placeholder.com/350x150',
        summary: '其实我一定也不懂装修66666',
        viewCount: 666,
        tags: ['日式风格', '创意']
    },
    {
        title: '其实我想要个别墅',
        coverImageUrl: 'https://via.placeholder.com/350x150',
        summary: '其实我一定也不懂装修23333',
        viewCount: 666,
        tags: ['日式风格', '美式', '其他']
    },
    {
        title: '小户型之王',
        coverImageUrl: 'https://via.placeholder.com/350x150',
        summary: '其实我一定也不懂装修',
        viewCount: 666,
        tags: ['日式风格', '小户型']
    },
    {
        title: '大开间的灵活应用',
        coverImageUrl: 'https://via.placeholder.com/350x150',
        summary: '其实我一定也不懂装修66666',
        viewCount: 666,
        tags: ['日式风格', '创意']
    },
    {
        title: '其实我想要个别墅',
        coverImageUrl: 'https://via.placeholder.com/350x150',
        summary: '其实我一定也不懂装修23333',
        viewCount: 666,
        tags: ['日式风格', '美式', '其他']
    },
];


export const MOCK_POSTS_NEWS: Post[] = [
    {
        title: '北市区新店开业啦，欢迎砸场',
        viewCount: 999,
        tags: [],
        topped: true,
        createDate: new Date
    },
    {
        title: '老板娘和小姨子男友跑了,无心经营,休业一天「哭」',
        viewCount: 999,
        tags: [],
        topped: false,
        createDate: new Date
    },
    {
        title: '老板生日，特举行到店送大米活动！',
        viewCount: 999,
        tags: [],
        topped: false,
        createDate: new Date
    },
    {
        title: '打折打折，前场打断为止',
        viewCount: 999,
        tags: [],
        topped: false,
        createDate: new Date
    },
    {
        title: '网站上线了，看看我活好么？。。。好的话给我介绍对象。。。',
        viewCount: 999,
        tags: [],
        topped: false,
        createDate: new Date
    }
];


export const MOCK_POSTS_ARTICLES: Post[] = [
    {
        title: '紧急：XX地板有毛病，快换',
        viewCount: 999,
        tags: [],
        topped: true,
        createDate: new Date
    },
    {
        title: '不转不是中国人',
        viewCount: 999,
        tags: [],
        topped: false,
        createDate: new Date
    },
    {
        title: 'DIY，换桌子',
        viewCount: 999,
        tags: [],
        topped: false,
        createDate: new Date
    },
    {
        title: '说来你可能不信，这个牌子的瓷砖可以让你省一半钱',
        viewCount: 999,
        tags: [],
        topped: false,
        createDate: new Date
    },
    {
        title: '看看这个农村别墅，可6了，要是我有一块地，我也这么干',
        viewCount: 999,
        tags: [],
        topped: false,
        createDate: new Date
    }
];
