import { Container } from "../models/container-model";

export class RenderingService {
    static get contentElement() {
        return document.getElementById('content');
    }

    static renderContent(items, id) {
        // IE does not support <template>
		// const container = new Container(id).getElement().firstElementChild;
		
        const container = new Container(id).getElement();
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
			const element = item.getElement();

            container.appendChild(element);
        }
        this.addContent(container);
	}

    static addContent(element) {
        this.contentElement.appendChild(element);
    }

    static clearContent() {
        this.contentElement.innerHTML = '';
    };
}