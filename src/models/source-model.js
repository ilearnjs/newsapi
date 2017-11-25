import { Template } from "./template-model";
import { HEADLINES } from "./../news-constants";

export class Source extends Template {
    constructor(source) {
        super();
        this.id = source.id;
        this.name = source.name;
        this.url = source.url;
    }

    getHtml() {
        return `
        <div class="source">
            <a 
                href="#${HEADLINES}?sources=${this.id}" 
                style="background-image:url(${this.getLink()})" 
                title=" ${this.name}">
            </a>
        </div>
        `;
    }

    getLink() {
        return `https://icons.better-idea.org/icon?url=${this.url}&size=70..120..200`;
    }
}