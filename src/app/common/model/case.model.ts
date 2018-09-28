export interface Case {
    id?: number;
    title: string;
    styles?: string[];
    /** 封面图 */
    coverImageUrl: string;
    summary: string;
    createDate?: Date;
    /** 收藏数量 */
    likeCount?: number;
    /** 浏览量 */
    viewCount: number;
    tags: string[];
    detail?: string;
    // comments?: Comment[]; 评论功能稍后考虑
}
