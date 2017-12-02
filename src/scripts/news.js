import { NewsDataService } from './services/news-data-service';
import { NewsRenderingService } from './services/news-rendering-service';
import { NewsRoutingService } from './services/news-routing-service';
import { SOURCES, HEADLINES } from './news-constants';

const routes = [
    {
        url: SOURCES,
        action: () => {
            NewsDataService.getSources()
                .then(sources => NewsRenderingService.renderContent(sources, 'sources'))
                .catch(ex => alert(ex));
        },
    },
    {
        url: HEADLINES,
        action: (params) => {
            NewsDataService.getHeadlines(params)
                .then(headLines => NewsRenderingService.renderContent(headLines, 'headlines'))
                .catch(ex => alert(ex));
        },
    },
];

const routingService = new NewsRoutingService(routes);
const route = () => routingService.route(location.hash);

window.addEventListener('hashchange', route);
window.addEventListener('load', route);