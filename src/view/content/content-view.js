import { createElement } from '../../render.js';

const contentTemplate = () => '<section class="films"> </section>';

export default class ContentView {
  getTemplate() {
    return contentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
