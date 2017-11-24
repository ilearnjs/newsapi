import { Template } from "./template-model";

export class Article extends Template {
    constructor(article) {
        super();
        this.title = article.title;
    }

    getHtml() {
        return `
        <div class="article">
            <span class="title">
                ${this.title}
            </span>
        </div>
        `;
    }
}