export class Template {
    getElement() {
        const template = document.createElement('template');
        template.innerHTML = this.getHtml();

        return template.content;
    }

    $if(condition, result) {
        return condition ? result : '';
    }

    getHtml() {
        throw new Error('The method must be overriden');
    }
}