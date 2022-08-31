import { createElement } from '../../render.js';

const moviesListTemplate = () => '<div class="films-list__container"> </div>';

export default class MoviesListView {
  getTemplate() {
    return moviesListTemplate();
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
