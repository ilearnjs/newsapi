import { Template } from "./template-model";

export class Headline extends Template {
    constructor(headline) {
        super();
        this.title = headline.title;
    }

    getHtml() {
        return `
        <div class="headline">
            <span class="title">
                ${this.title}
            </span>
        </div>
        `;
    }
}