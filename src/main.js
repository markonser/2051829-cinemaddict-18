import NavBarView from './view/nav-bar-view.js';
import { render } from './render.js';
// import ListEmptyView from './view/list-empty-view.js';
import UserProfileView from './view/user-profile-view.js';
// import MovieDetailView from './view/movie-detail-view.js';

import MainContentPresenter from './presenter/main-content-presenter.js';

const headerElement = document.querySelector('header');
const mainElement = document.querySelector('main');
// const footerElement = document.querySelector('footer');
// const filmsElement = mainElement.querySelector('films');

render(new UserProfileView, headerElement);
render(new NavBarView, mainElement);

// const filmsList = mainElement.querySelector('.films-list');
// const filmsListContainer = mainElement.querySelector('.films-list__container');

const filmsPresenter = new MainContentPresenter();

filmsPresenter.init(mainElement);


// render(new ListEmptyView, mainElement);

// render(new MovieDetailView, footerElement);
