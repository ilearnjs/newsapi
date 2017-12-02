import { Template } from "./template-model";

export class Container extends Template {
    constructor(id) {
        super();
        this.id = id;
    }

    getHtml() {
        return `
        <div id="${this.id}">
        </div>
        `;
    }
}