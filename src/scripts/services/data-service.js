import { SOURCES_URL, HEADLINES_URL, APIKEY } from '../app-constants';
import { CacheService } from './cache-service';

const headlinesCacheTimeout = 5 * 60; // 5 minutes
const cacheService = new CacheService();

// IE does not support URL
export class DataService {
	static getSources() {
		// const url = new URL(SOURCES_URL);
		const url = SOURCES_URL;

		return this.request(url);
	};

	static getHeadlines(params) {
		// const url = new URL(HEADLINES_URL);
		const url = HEADLINES_URL;

		return this.request(url, params, headlinesCacheTimeout);
	};

	static request(url, params = {}, timeout = 0) {
		Object.assign(params, { APIKEY });

		// Object.keys(params)
		//     .forEach(key => url.searchParams.append(key, params[key]));

		const urlParams = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
		url += `?${urlParams}`;

		const cached = cacheService.getFromCahce(url, timeout);
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