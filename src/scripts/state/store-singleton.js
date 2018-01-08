let storeInstance = null;

export class StoreSingleton {
	constructor(store) {
		if (!storeInstance) {
			storeInstance = store;
		}

		return storeInstance;
	}

	static get storeInstance() {
		return storeInstance;
	}
}