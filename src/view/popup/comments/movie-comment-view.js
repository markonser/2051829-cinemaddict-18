import { formatRawDateToCommentCreatedDate } from '../../../utils/movie-data.js';
import AbstractView from '../../../framework/view/abstract-view.js';

const createMovieCommentTemplate = (userComment) => {
  const { author, comment, date, emotion } = userComment;

  const commentDate = formatRawDateToCommentCreatedDate(date);

  return `<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
  </span>
  <div>
    <p class="film-details__comment-text">${comment}</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${author}</span>
      <span class="film-details__comment-day">${commentDate}</span>
      <button class="film-details__comment-delete">Delete</button>
    </p>
  </div>
  </li>`;
};

export default class MovieCommentView extends AbstractView {

  #comment = null;

  constructor(comment) {
    super();
    this.#comment = comment;
  }

  get template() {
    return createMovieCommentTemplate(this.#comment);
  }

  get deleteButton() {
    return this.element.querySelector('.film-details__comment-delete');
  }

  setDeleteCommentClickHandler(callback) {
    this._callback.deleteComment = callback;
    this.deleteButton.addEventListener('click', this.#deleteCommentClickHandler);
  }

  handleActivationDeleteButton = () => {
    this.deleteButton.textContent = 'Delete';
    this.deleteButton.disabled = false;
  };

  #deleteCommentClickHandler = (evt) => {
    evt.preventDefault();
    this.#disableDeleteButton();
    this._callback.deleteComment(this.#comment);
  };

  #disableDeleteButton() {
    this.deleteButton.textContent = 'Deleting...';
    this.deleteButton.disabled = true;
  }

}
