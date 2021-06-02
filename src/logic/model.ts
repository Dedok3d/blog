export interface ArticleRecord {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: Date;
    updatedAt: Date;
}

export type AsyncEffectCallback = () => Promise<void>;

export interface Params {
    [key: string]: string | number;
}