import {createUserRank} from './components/userRank.js';
import {createMainNavigation} from './components/mainNavigation.js';
import {createSortList} from './components/sortList.js';
import {createFilmsBoard} from './components/filmsBoard.js';
import {createFilmsExtraBoard} from './components/filmsExtraBoard.js';
import {createFilmCard} from './components/filmCard.js';
import {createShowMoreBtn} from './components/showMoreBtn.js';
import {createFooterStatistics} from './components/footerStatistics.js';
import {createFilmDetailsPopup} from './components/filmDetailsPopup.js';

const FILMS_NUM = 5;

const EXTRA_FILMS_NUM = 2;

const render = (container, template, place = `beforeEnd`) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, createUserRank());

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, createMainNavigation(), `afterBegin`);
render(siteMainElement, createSortList());
render(siteMainElement, createFilmsBoard());

const siteFilmsBoard = siteMainElement.querySelector(`.films`);
const siteFilmsContainer = siteFilmsBoard.querySelector(`.films-list__container`);

for (let i = 0; i < FILMS_NUM; i++) {
  render(siteFilmsContainer, createFilmCard());
}

render(siteFilmsContainer, createShowMoreBtn(), `afterEnd`);

const extraFilmBoards = [
  {
    title: `Top rated`,
    id: `top-rated`
  },
  {
    title: `Most commented`,
    id: `most-commented`
  },
];

Array.prototype.forEach.call(extraFilmBoards, (board)=> {
  render(siteFilmsBoard, createFilmsExtraBoard(board));

  for (let i = 0; i < EXTRA_FILMS_NUM; i++) {
    let siteFilmsExtrasContainer = siteFilmsBoard.querySelector(`#${board.id} .films-list__container`);
    render(siteFilmsExtrasContainer, createFilmCard());
  }

});

const siteFooterElement = document.querySelector(`.footer`);
const siteFooterStatistics = siteFooterElement.querySelector(`.footer__statistics`);
render(siteFooterStatistics, createFooterStatistics(), `afterBegin`);
render(siteFooterElement, createFilmDetailsPopup(), `afterEnd`);
