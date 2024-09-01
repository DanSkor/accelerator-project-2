import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const initAdvSlider = () => {
  const advSlider = document.querySelector('[data-slider="adv-slider"]');
  if (!advSlider) {
    return;
  }

  if (window.innerWidth >= 1440) {
    const swiper = new Swiper('.adv__slider', {
      modules: [Navigation],
      simulateTouch: false,
      grabCursor: false,
      speed: 500,
      loop: true,
      spaceBetween: 30,
      initialSlide: 2,
      centeredSlides: true,
      slidesPerGroup: 2,
      autoHeight: false,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.adv__slider-button--next',
        prevEl: '.adv__slider-button--prev',
      },
    });
    swiper.update();
  }
};

initAdvSlider();

const items = document.querySelector('.adv').querySelectorAll('.swiper-slide');
const list = document.querySelector('.adv').querySelector('.swiper-wrapper');

if (window.innerWidth >= 1440) {
  list.style.width = '4100px';
  list.style.transform = 'translate3d(-1110px, 0px, 0px)';
}

for (const item of items) {
  item.style.display = 'grid';
  if (window.innerWidth >= 1440) {
    item.style.width = '380px';
  } else if (window.innerWidth < 1440 && window.innerWidth >= 768) {
    item.style.width = '324px';
  } else if (window.innerWidth >= 320 && window.innerWidth < 768) {
    item.style.width = '290px';
  }
}

if (window.innerWidth < 1440) {
  items[5].style.display = 'none';
  items[6].style.display = 'none';
  items[7].style.display = 'none';
}
