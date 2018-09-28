/** 访客留言 */
export interface VisitorLeaveWords {
    name?: string;
    createDate: Date;
    content: string;
    reply?: ReplyContent;
}

/** 留言回复 */
export interface ReplyContent {
    content: string;
    createDate: Date;
}


