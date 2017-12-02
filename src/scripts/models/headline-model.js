import { Template } from "./template-model";

export class Headline extends Template {
    constructor(headline) {
        super();
        Object.assign(this, headline);
    }

    getHtml() {
        return `
        <div class="headline">
            <span class="title">
                ${this.title}
            </span>
            <span class="publishedAt">
                Published at ${this.getDateString(this.publishedAt)}
            </span>
            ${this.$if(this.urlToImage, `
                <div class="image">
                    <img src="${this.urlToImage}">
                </div>
            `)} 
            <div class="article">
                <span class="description">
                    ${this.description}
                </span>
                <span class="link">
                    <a href="${this.url}" target="_blank">
                        Go to article
                    </a>
                </span>
            </div>
        </div>
        `;
    }

    getDateString(d) {
        let date = new Date(d);
        return date.toLocaleString();
    };
}