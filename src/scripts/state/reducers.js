import { SOURCES, HEADLINES } from '../app-constants';

function pageReducer(state = { page: SOURCES }, action) {
	switch (action.type) {
		case 'GOTO_SOURCES':
			state = Object.assign({}, state, { page: SOURCES, sources: null });
		case 'GOTO_HEADLINES':
			state = Object.assign({}, state, { page: HEADLINES, source: action.source });
	}

	return state;
}

export { pageReducer };