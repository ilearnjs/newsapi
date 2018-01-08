export class Store {
	constructor(reducer) {
		this.reducer = reducer;
		this.subscribtions = [];
		this.subscribeToHistoryEvents();
		this.init();
	}

	getState() {
		return this.state;
	};

	init() {
		const hash = location.hash.slice(1);
		if (hash) {
			this.state = JSON.parse(hash);
		} else {
			this.dispatch({});
		}
	}

	dispatch(action) {
		this.state = this.reducer(this.state, action);
		for (let f of this.subscribtions) {
			f();
		}

		const hash = `#${JSON.stringify(this.state)}`;

		if (action.pushHistory) {
			history.pushState(this.state, '', hash);
		} else {
			history.replaceState(this.state, '', hash);
		}
	};

	dispatchAndPushHistory(action) {
		action.pushHistory = true;
		this.dispatch(action);
	}

	subscribe(func) {
		this.subscribtions.push(func);
	};

	subscribeToHistoryEvents() {
		window.addEventListener('popstate', (e) => {
			e.preventDefault();

			this.state = e.state || undefined;
			this.dispatch({});
		});
	}
};
