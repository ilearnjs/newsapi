import { SOURCES_URL, HEADLINES_URL, APIKEY } from '../news-constants';
import { Source } from '../models/source-model';
import { Headline } from '../models/headline-model';
import { CacheService } from './cache-service';

const headlinesCacheTimeout = 5 * 60; // 5 minutes
const cacheService = new CacheService();

// IE does not support URL
export class NewsDataService {
	static getSources() {
		// const url = new URL(SOURCES_URL);

		const url = SOURCES_URL;


		return this.request(url)
			.then(json => this.mapSources(json));
	};

	static mapSources(json, onClick) {
		return json.sources.map(s => new Source(s));
	};

	static getHeadlines(params) {
		// const url = new URL(HEADLINES_URL);

		const url = HEADLINES_URL;

		return this.request(url, params)
			.then(json => this.mapHeadlines(json));
	};

	static mapHeadlines(json) {
		return json.articles.map(a => new Headline(a));
	}

	static request(url, params = {}) {
		Object.assign(params, { APIKEY });

		// Object.keys(params)
		//     .forEach(key => url.searchParams.append(key, params[key]));

		const urlParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
		url += `?${urlParams}`;

		const cached = cacheService.getFromCahce(url);
		if (cached) {
			return Promise.resolve(cached);
		}

		return fetch(url)
			.then(data => {
				return data.json().then(json => {
					cacheService.setToCache(url, json);
					return json;
				});
			});
	};
}