import { createElement } from '../render.js';

const mainContentTemplate = () => (
  `<div></div>
  `
);

export default class MainContentView {
  getTemplate() {
    return mainContentTemplate();
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
