import { Container } from "../models/container-model";

export class NewsRenderingService {
    constructor() {
        this.contentElement = document.getElementById('content');
    }

    renderContent(items, id) {
        this.clearContent();
        const container = new Container(id).getElement().firstElementChild;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const element = item.getElement();
            container.appendChild(element);
        }
        this.addContent(container);
    }

    addContent(element) {
        this.contentElement.appendChild(element);
    }

    clearContent() {
        this.contentElement.innerHTML = '';
    };
}