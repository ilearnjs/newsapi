import { SOURCES_URL, HEADLINES_URL, APIKEY } from '../news-constants';
import { Source } from '../models/source-model';
import { Headline } from '../models/headline-model';

export class NewsDataService {
    getSources() {
        const url = new URL(SOURCES_URL);

        return this.request(url)
            .then(json => json.sources.map(s => new Source(s)));
    };

    getHeadlines(params) {
        const url = new URL(HEADLINES_URL);

        return this.request(url, params)
            .then(json => json.articles.map(a => new Headline(a)));
    };

    request(url, params = {}) {
        Object.assign(params, { APIKEY });
        Object.keys(params)
            .forEach(key => url.searchParams.append(key, params[key]));

        return fetch(url)
            .then(data => data.json());
    };
}
