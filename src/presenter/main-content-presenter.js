import MoviesListView from '../view/movies-list-view.js';
import { render } from '../render.js';
import MovieCardView from '../view/movie-card-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import SortFilmsView from '../view/sort-films-view.js';
import MainContentView from '../view/main-content-view.js';

export default class MainContentPresenter {
  mainContentComponent = new MainContentView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render(this.mainContentComponent, this.boardContainer);
    // render(new SortView(), this.boardComponent.getElement());
    // render(this.filmsListComponent, this.boardComponent.getElement());
    // render(new TaskEditView(), this.filmsListComponent.getElement());

    // for (let i = 0; i < 3; i++) {
    //   render(new TaskView(), this.filmsListComponent.getElement());

    render(new SortFilmsView(), this.mainContentComponent.getElement());
    render(new MoviesListView(), this.mainContentComponent.getElement());

    for (let i = 0; i < 5; i++) {
      render(new MovieCardView, this.mainContentComponent.getElement());
    }
    render(new ShowMoreButtonView(), this.mainContentComponent.getElement());
  };
}
