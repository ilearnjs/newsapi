import { Template } from './template-model';
import { HEADLINES } from './../app-constants';
import { StoreSingleton } from './../state/store-singleton';

export class Source extends Template {
	constructor(source) {
		super();
		Object.assign(this, source);
	}

	getHtml() {
		return `
        <div class="source">
			<a
				data-source="${this.id}"
                style="background-image:url(${this.getSourceIconLink()})" 
				title="${this.name}"
				class="link">
            </a>
        </div>
        `;
	}

	addListeners(el) {
		el.onclick = e => {
			e.preventDefault();

			StoreSingleton.storeInstance.dispatchAndPushHistory({
				type: 'GOTO_HEADLINES',
				source: this.id
			});
		};
	}

	getSourceIconLink() {
		return `https://icons.better-idea.org/icon?url=${this.url}&size=50..120..200`;
	}
}