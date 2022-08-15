import NavBarView from './view/nav-bar.js';
import ShowMoreButtonView from './view/show-more-btn-view.js';
import { render } from './render.js';
// import ListEmptyView from './view/list-empty-view.js';
import UserProfileView from './view/user-profile.js';
import SortFilmsView from './view/sort-films-view.js';
import MovieCardView from './view/movie-card-view.js';
// import MovieDetailView from './view/movie-detail-view.js';
import MoviesListView from './view/movies-list-view.js';

const headerElement = document.querySelector('header');
const mainElement = document.querySelector('main');
// const footerElement = document.querySelector('footer');
// const filmsElement = mainElement.querySelector('films');

render(new UserProfileView,headerElement);
render(new NavBarView, mainElement);
render(new SortFilmsView, mainElement);
render(new MoviesListView, mainElement);

const filmsList = mainElement.querySelector('.films-list');
const filmsListContainer = mainElement.querySelector('.films-list__container');

render(new MovieCardView, filmsListContainer);
render(new MovieCardView, filmsListContainer);
render(new MovieCardView, filmsListContainer);
render(new MovieCardView, filmsListContainer);
render(new MovieCardView, filmsListContainer);

render(new ShowMoreButtonView(), filmsList);
// render(new ListEmptyView, mainElement);

// render(new MovieDetailView, footerElement);
