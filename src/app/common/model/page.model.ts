export interface PageData<T> {
    page: number;
    pageSize: number;
    length: number;
    // totalCount: number;
    // totalPage: number;
    datas: T[];
}
