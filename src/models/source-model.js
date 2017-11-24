import { Template } from "./template-model";
import { HEADLINES } from "./../news-constants";

export class Source extends Template {
    constructor(source) {
        super();
        this.id = source.id;
        this.name = source.name;
    }

    getHtml() {
        return `
        <div class="source">
            <a href="#${HEADLINES}?sources=${this.id}">
                ${this.name}
            </a>
        </div>
        `;
    }
}