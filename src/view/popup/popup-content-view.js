import { createElement } from '../../render.js';

const createPopupContentTemplate = () => '<div class="film-details__inner"> </div>';

export default class PopupContentView {
  #element = null;

  get template() {
    return createPopupContentTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}

