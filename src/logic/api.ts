import { ArticleRecord } from "./model";
import { formatParams } from "./utils";

export default class Api {
    private url = 'https://api.spaceflightnewsapi.net/v3';

    public getArticles = async (offset?: number): Promise<ArticleRecord[]> => {
        const url = formatParams(`${this.url}/articles`, {
            _start: offset,
            _limit: 10
        });

        const res = await fetch(url, {
            method: 'get',
        });

        return await res.json();
    }
}
