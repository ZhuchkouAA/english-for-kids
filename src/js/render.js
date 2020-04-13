import { mainLayout, creatorCategoriesLayout } from './layout';
import cards from './cards';

const play = 0;
const container = document.querySelector('.row');

function clearContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}


function rotate(event) {
  if (document.documentElement.clientWidth < 1000) return;
  const cardItem = this.querySelector('.card-img-top');
  const halfHeight = cardItem.offsetHeight / 2;
  const halfWidth = cardItem.offsetWidth / 2;
  cardItem.style.transform = `rotateX(${-(event.offsetY - halfHeight) / 5}deg) rotateY(${
    (event.offsetX - halfWidth) / 5}deg)`;
}

function rotateRemove() {
  if (document.documentElement.clientWidth < 1000) return;
  this.querySelector('.card-img-top').style.transform = 'rotateX(0deg) rotateY(0deg)';
}

function handlerRotate() {
  const cardItems = document.querySelectorAll('.card-item');
  cardItems.forEach((cardItem) => {
    cardItem.addEventListener('mousemove', rotate);
    cardItem.addEventListener('mouseout', rotateRemove);
  });
}

function handlerMainLayoutClick() {
  const cardsItems = document.querySelectorAll('.card');
  cardsItems.forEach((card) => {
    card.addEventListener('click', (event) => {
      let { target } = event;
      while (target.classList.contains('card') !== true) {
        target = target.parentNode;
      }
      renderCategory(play, target.id);
    });
  });
}


function handlerAudioTrain(id) {
  const cardsItems = document.querySelectorAll('.card');
  cardsItems.forEach((card, index) => {
    card.addEventListener('click', (e) => {
      function flipRemove() {
        card.classList.remove('rotate');
        setTimeout(() => {
          this.querySelector('.card-header').innerHTML = `${cards[id][index].word} <img class="rotate-button" src="./assets/img/rotate.svg" alt="rotate pic">`;
          this.querySelector('.card-header').classList.remove('reflection');
        }, 150);
        card.removeEventListener('mouseleave', flipRemove);
      }

      function flipAdd() {
        card.classList.add('rotate');
        setTimeout(() => {
          card.querySelector('.card-header').innerText = cards[id][index].translation;
          card.querySelector('.card-header').classList.add('reflection');
        }, 150);
        card.addEventListener('mouseleave', flipRemove);
      }

      if (e.target.classList.contains('rotate-button')) {
        flipAdd(e.target.parentNode.parentNode);
      } else {
        const src = `./assets/${cards[id][index].audioSrc}`;
        const audio = new Audio(src);
        audio.play();
      }
    });
  });
}


function renderCategory(flag, id) {
  clearContainer();
  if (flag) {
    const categoriesLayout = creatorCategoriesLayout(cards, +id);
    container.innerHTML = categoriesLayout;
    document.querySelectorAll('.card').forEach((card) => { card.classList.add('text-white', 'bg-warning'); });
    handlerRotate();
  } else {
    const categoriesLayout = creatorCategoriesLayout(cards, +id);
    container.innerHTML = categoriesLayout;
    document.querySelectorAll('.card').forEach((card) => { card.classList.add('text-white', 'bg-info'); });
    handlerAudioTrain(id);
    handlerRotate();
  }
}

function renderMain(flag) {
  clearContainer();
  if (flag) {
    container.innerHTML = mainLayout;
    handlerRotate();
    handlerMainLayoutClick();
    document.querySelectorAll('.card').forEach((card) => { card.classList.add('text-white', 'bg-warning'); });
  } else {
    container.innerHTML = mainLayout;
    handlerRotate();
    handlerMainLayoutClick();
    document.querySelectorAll('.card').forEach((card) => { card.classList.add('text-white', 'bg-info'); });
  }
}


renderMain(play);
