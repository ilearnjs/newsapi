class ReduxStore {
	constructor(reducer) {
		this.reducer = reducer;

		this.subscribtions = [];
		this.subscribeToHistoryEvents();

		this.dispatch({});
	}

	getState() {
		return this.state;
	}

	dispatch(action) {
		this.state = this.reducer(this.state, action);
		for (let f of this.subscribtions) {
			f();
		}

		if (action.saveHistory) {
			history.pushState(this.state, '', action.historyUrl);
		}
	};

	subscribe(func) {
		this.subscribtions.push(func);
	};

	subscribeToHistoryEvents() {
		window.addEventListener('popstate', (e) => {
			e.preventDefault();

			this.state = e.state || {};
			this.dispatch({});
		});
	}
};

function combineReducers(reducers) {
	return (state = {}, action) => {
		return Object.keys(reducers).reduce(
			(nextState, key) => {
				nextState[key] = reducers[key](state[key], action);
				return nextState;
			},
			{}
		)
	}
};

function navigationReducer(state = {}, action) {
	switch (action.type) {
		case 'GOTO_SOURCES':
			state = Object.assign({}, state, { page: 'Sources', sources: null });
		case 'GOTO_ARTICLES':
			state = Object.assign({}, state, { page: 'Articles', sources: action.sources });
	}

	return state;
}

export { ReduxStore, combineReducers, navigationReducer };