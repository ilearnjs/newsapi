import { Template } from "./template-model";

export class Source extends Template {
    constructor(source) {
        super();
        this.id = source.id;
        this.name = source.name;
    }

    getHtml() {
        return `
        <div class="source">
            <a href="#" source-id="${this.id}">
                ${this.name}
            </a>
        </div>
        `;
    }
}