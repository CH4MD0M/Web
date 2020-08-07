import { elements } from "./base";

export const toggleLikeBtn = (isLiked) => {
  // isLiked = true OR false
  const iconString = isLiked ? "icon-heart" : "icon-heart-outlined";
  document
    .querySelector(".recipe__love use")
    .setAttribute("href", `img/icons.svg#${iconString}`);
};

export const toggleLikeMenu = (numLikes) => {
  // numLikes = state.likes.getNumLikes();
  elements.likesMenu.style.visibility = numLikes > 0 ? "visible" : "hidden";
  // likes배열의 길이를 받아와서 1개라도 있다면 visibility속성 값을 visible로 변경한다.
};

// Like UI Render
export const renderLike = (like) => {
  const markup = `
  <li>
  <a class="likes__link" href="#${like.id}">
      <figure class="likes__fig">
          <img src="${like.img}" alt="${like.title}">
      </figure>
      <div class="likes__data">
          <h4 class="likes__name">${like.title}</h4>
          <p class="likes__author">${like.author}</p>
      </div>
  </a>
</li>
    `;
  elements.likesList.insertAdjacentHTML("beforeend", markup);
};

// Like UI 삭제
export const deleteLike = (id) => {
  const el = document.querySelector(`.likes__link[href*="${id}"]`)
    .parentElement;
  if (el) el.parentElement.removeChild(el);
};
