import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';

const initHeroSlider = () => {
  if (!document.querySelector('[data-slider="hero-slider"]')) {
    return;
  }
  const swiper = new Swiper('.hero__slider', {
    modules: [Pagination],
    watchOverflow: true,
    grabCursor: false,
    simulateTouch: false,
    speed: 500,
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    pagination: {
      el: '.hero__pagination-list',
      clickable: true,
      bulletClass: 'hero__pagination-button',
      bulletActiveClass: 'hero__pagination-button--current',
    },
  });
  swiper.update();
};

initHeroSlider();
