export interface UserLike {
    title: string;
    type: '设计稿' | '文章';
    url: string;
    refId: number; // 收藏的对象的id
    createTime: Date;
}
