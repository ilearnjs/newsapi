import { SOURCES, ARTICLES, APIKEY } from '../models/news-constants';
import { Source } from '../models/source-model';
import { Article } from '../models/article-model';

export class NewsDataService {
    getSources() {
        const url = new URL(SOURCES);

        return this.request(url)
            .then(json => json.sources.map(s => new Source(s)));
    };

    getArticles(sources) {
        const url = new URL(ARTICLES);
        const params = { sources };

        return this.request(url, params)
            .then(json => json.articles.map(a => new Article(a)));
    };

    request(url, params = {}) {
        Object.assign(params, { APIKEY });
        Object.keys(params)
            .forEach(key => url.searchParams.append(key, params[key]));

        return fetch(url)
            .then(data => data.json())
            .catch(ex => alert(ex));
    };
}
