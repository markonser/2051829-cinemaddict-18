import { createElement } from '../../render.js';

const moviesListWrapperTemplate = () => `<section class="films-list">
<h2createMoviesListWrapperTemplate class="films-list__title visually-hidden">All movies. Upcoming</h2createMoviesListWrapperTemplate> </section>`;

export default class MoviesListWrapperView {
  getTemplate() {
    return moviesListWrapperTemplate();
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
