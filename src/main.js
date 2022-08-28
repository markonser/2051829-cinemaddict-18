import NavBarView from './view/nav-bar-view.js';
import ShowMoreButtonView from './view/show-more-button-view.js';
import { render } from './render.js';
// import ListEmptyView from './view/list-empty-view.js';
import UserProfileView from './view/user-profile-view.js';
import SortFilmsView from './view/sort-films-view.js';
// import MovieDetailView from './view/movie-detail-view.js';

import FilmsListPresenter from './presenter/films-list-presenter.js';

const headerElement = document.querySelector('header');
const mainElement = document.querySelector('main');
// const footerElement = document.querySelector('footer');
// const filmsElement = mainElement.querySelector('films');

render(new UserProfileView, headerElement);
render(new NavBarView, mainElement);

// const filmsList = mainElement.querySelector('.films-list');
// const filmsListContainer = mainElement.querySelector('.films-list__container');

const filmsPresenter = new FilmsListPresenter();

filmsPresenter.init(mainElement);


// render(new ListEmptyView, mainElement);

// render(new MovieDetailView, footerElement);
