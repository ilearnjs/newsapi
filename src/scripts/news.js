import { navigationReducer, ReduxStore } from './services/redux';
import { NewsDataService } from './services/news-data-service';
import { NewsRenderingService } from './services/news-rendering-service';
import { Footer } from './models/footer-model';

import '../styles/news.scss';


const newsApp = navigationReducer;
const store = new ReduxStore(newsApp);

const goToSources = () => {
	NewsDataService.getSources()
		.then(sources => NewsRenderingService.renderContent(sources, 'sources'))
		.catch(ex => alert('Something went wrong'));
}

const goToHeadlines = (params) => {
	NewsDataService.getHeadlines(params)
		.then(headLines => NewsRenderingService.renderContent(headLines, 'headlines'))
		.catch(ex => alert('Something went wrong'));
}

const render = () => {
	const state = store.getState();

	if (state.page === 'Articles') {
		goToHeadlines({ sources: state.sources });
		return;
	}
	goToSources();
}

export default () => {
	store.subscribe(render);

	render(false);
	const footer = new Footer();
	document.body.appendChild(footer.getElement());
};

document.getElementById("content").addEventListener("click", (e) => {
	if (e.target && e.target.matches("a")) {
		e.preventDefault();

		const source = e.target.getAttribute('data-source');
		store.dispatch(
			{
				type: 'GOTO_ARTICLES',
				sources: source,
				saveHistory: true,
				historyUrl: `#headlines?sources=${source}`
			}
		);
	}
});