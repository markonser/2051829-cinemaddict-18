import { createElement } from '../render.js';

const contentTemplate = () => (
  `<section class="films">
<section class="films-list">
<h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
<div class="films-list__container">
</div>
</section>
</section>
  `
);

export default class MoviesListView {
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
