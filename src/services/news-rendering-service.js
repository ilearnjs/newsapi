export class NewsRenderingService {
    constructor() {
        this.contentElement = document.getElementById('content');
    }

    renderSources(sources) {
        this.clearContent();
        for (let i = 0; i < sources.length; i++) {
            const source = sources[i];
            const sourceElement = source.getElement();
            this.addContent(sourceElement);
        }
    };

    renderArticles(articles) {
        this.clearContent();
        for (let i = 0; i < articles.length; i++) {
            const article = articles[i];
            const articleElement = article.getElement();
            this.addContent(articleElement);
        }
    };

    addContent(element) {
        this.contentElement.appendChild(element);
    }

    clearContent() {
        this.contentElement.innerHTML = '';
    };
}