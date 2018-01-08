import '../styles/news.scss';

import { Store } from './state/store';
import { pageReducer } from './state/reducers';
import { StoreSingleton } from './state/store-singleton';
import { SOURCES, HEADLINES } from './app-constants';
import { DataService } from './services/data-service';
import { RenderingService } from './services/rendering-service';
import { Source } from './models/source-model';
import { Headline } from './models/headline-model';
import { Footer } from './models/footer-model';

const store = new Store(pageReducer);
new StoreSingleton(store);

const render = () => {
	const state = store.getState();
	if (state.page === SOURCES) {
		RenderingService.clearContent();
		DataService.getSources()
			.then(data => data.sources.map(s => new Source(s)))
			.then(sources => RenderingService.renderContent(sources, 'sources'))
			.catch(ex => alert('Something went wrong'));
	}

	if (state.page === HEADLINES) {
		RenderingService.clearContent();
		DataService.getHeadlines({
			sources: state.source
		})
			.then(data => data.articles.map(a => new Headline(a)))
			.then(sources => RenderingService.renderContent(sources, 'headlines'))
			.catch(ex => alert('Something went wrong'));
	}
}

store.subscribe(render);

export default () => {
	render();
	const footer = new Footer();
	document.body.appendChild(footer.getElement());	
};