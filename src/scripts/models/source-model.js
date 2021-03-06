import { Template } from "./template-model";
import { HEADLINES } from "./../news-constants";

export class Source extends Template {
    constructor(source) {
        super();
        Object.assign(this, source);
    }

    getHtml() {
        return `
        <div class="source">
            <a
                href="#${HEADLINES}?sources=${this.id}"
                style="background-image:url(${this.getSourceIconLink()})" 
                title=" ${this.name}">
            </a>
        </div>
        `;
    }

    getSourceIconLink() {
        return `https://icons.better-idea.org/icon?url=${this.url}&size=70..120..200`;
    }
}