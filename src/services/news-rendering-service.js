export class NewsRenderingService {
    constructor() {
        this.contentElement = document.getElementById('content');
    }

    renderContent(items) {
        this.clearContent();
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const element = item.getElement();
            this.addContent(element);
        }
    }

    addContent(element) {
        this.contentElement.appendChild(element);
    }

    clearContent() {
        this.contentElement.innerHTML = '';
    };
}