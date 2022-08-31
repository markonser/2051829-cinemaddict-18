import { createElement } from '../../render.js';

const popupWrapperTemplate = () => '<section class="film-details"> </section>';

export default class PopupWrapperView {
  getTemplate() {
    return popupWrapperTemplate();
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
