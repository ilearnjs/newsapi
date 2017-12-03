export class Template {
    getElement() {
        // IE does not support <template>
        // const template = document.createElement('template');
        // template.innerHTML = this.getHtml();

        // return template.content;

        const div = document.createElement('div');
        div.innerHTML = this.getHtml();

        return div.firstElementChild;
    }

    $if(condition, result) {
        return condition ? result : '';
    }

    getHtml() {
        throw new Error('The method must be overriden');
    }
}