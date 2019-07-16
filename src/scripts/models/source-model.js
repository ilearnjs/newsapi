import { Template } from './template-model'
import { HEADLINES } from './../news-constants'

export class Source extends Template {
  constructor(source) {
    super()
    Object.assign(this, source)
  }

  getHtml() {
    return `
        <div class="source">
            <a
                href="#${HEADLINES}?sources=${this.id}"
                style="background-image:url(${this.getSourceIconLink()})" 
                title=" ${this.name}"
                class="link">
            </a>
        </div>
        `
  }

  getSourceIconLink() {
    return `https://icon-locator.herokuapp.com/icon?url=${this.url}&size=70..120..200`
  }
}
