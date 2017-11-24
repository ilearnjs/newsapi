import { NewsDataService } from './services/news-data-service';
import { NewsRenderingService } from './services/news-rendering-service';

const dataService = new NewsDataService();
const renderingService = new NewsRenderingService();

const sources = dataService.getSources();
sources.then(s => renderingService.renderSources(s));

function openSource(id) {
    const articles = dataService.getArticles(id);
    articles.then(a => renderingService.renderArticles(a));
}

document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'a') {
        const id = event.target.getAttribute('source-id');
        openSource(id);
    }
});