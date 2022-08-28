import MoviesListView from '../view/movies-list-view.js';
import { render } from '../render.js';
import MovieCardView from '../view/movie-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import SortFilmsView from '../view/sort-films-view.js';

export default class FilmsListPresenter {
  boardComponent = new MoviesListView();
  filmsListComponent = new MovieCardView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render(this.boardComponent, this.boardContainer);
    // render(new SortView(), this.boardComponent.getElement());
    // render(this.filmsListComponent, this.boardComponent.getElement());
    // render(new TaskEditView(), this.filmsListComponent.getElement());

    // for (let i = 0; i < 3; i++) {
    //   render(new TaskView(), this.filmsListComponent.getElement());

    render(new SortFilmsView, this.boardComponent.getElement());

    for (let i = 0; i < 5; i++) {
      render(new MovieCardView, this.boardComponent.getElement());
    }
    render(new ShowMoreButtonView(), this.boardComponent.getElement());
  };
}
