import { NewsDataService } from './services/news-data-service';
import { NewsRenderingService } from './services/news-rendering-service';
import { NewsRoutingService } from './services/news-routing-service';
import { SOURCES, HEADLINES } from './news-constants';

const dataService = new NewsDataService();
const renderingService = new NewsRenderingService();

const routes = [
    {
        url: SOURCES,
        action: () => {
            dataService.getSources()
                .then(sources => renderingService.renderContent(sources, 'sources'))
                .catch(ex => alert(ex));
        },
    },
    {
        url: HEADLINES,
        action: (params) => {
            dataService.getHeadlines(params)
                .then(headLines => renderingService.renderContent(headLines, 'headlines'))
                .catch(ex => alert(ex));
        },
    },
];

const routingService = new NewsRoutingService(routes);
const route = () => routingService.route(location.hash);

window.addEventListener('hashchange', route);
window.addEventListener('load', route);