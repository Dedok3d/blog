import { ArticleRecord } from "./model";

export default class Api {
    private url = 'https://api.spaceflightnewsapi.net/v3';

    public getArticles = async () => {
        const res = await fetch(`${this.url}/articles`, {
            method: 'get',
        });

        const json: ArticleRecord[] = await res.json();
        return json;

    }
}
