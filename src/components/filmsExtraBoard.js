export const createFilmsExtraBoard = ({title, id}) => {
  return (
    `<section class="films-list--extra" id="${id}">
      <h2 class="films-list__title">${title}</h2>
      <div class="films-list__container"></div>
    </section>`
  );
};
