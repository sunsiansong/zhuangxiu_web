export class Post {
    title: string;
    content?: string;
    createDate: Date;
    viewCount: number;
    author?: any; // TODO 确定类型
    tags: string[];
    topped: boolean;
}
