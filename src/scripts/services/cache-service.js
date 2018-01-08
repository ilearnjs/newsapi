const ticksPerSecond = 1000;

export class CacheService {
	constructor() {
		this.cahce = {};
	}

	setToCache(key, data) {
		this.cahce[key] = {
			data: data,
			timestamp: this.getTicks()
		}
	};

	getFromCahce(key, timeout = null) {
		const value = this.cahce[key];
		if (!value) {
			return null;
		}

		return !this.isExpired(value.timestamp, timeout)
			? value.data
			: null;
	};

	clearCache(key) {
		this.cahce = {};
	};

	getTicks() {
		return (new Date()).getTime();
	};

	isExpired(timestamp, timeout) {
		return timeout !== null && (this.getTicks() - timestamp) / ticksPerSecond >= timeout;
	};
}