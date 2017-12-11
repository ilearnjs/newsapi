import { Template } from "./template-model";

export class Footer extends Template {
    getHtml() {
        return `
			<div id="footer">
				News from
				<a href="https://newsapi.org/">NewsApi.org</a>
			</div>
        `;
    }
}
