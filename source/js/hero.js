import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';

const initCurrentSlide = () => {
  const currentSlide = document.querySelector('.swiper-slide-active');
  if (!currentSlide) {
    return;
  }

  const allSlides = document.querySelectorAll('.hero__item');
  allSlides.forEach((slide) => {
    slide.querySelectorAll('a').forEach((slideLink) => {
      slideLink.setAttribute('tabindex', '-1');
    });
  });

  currentSlide.querySelectorAll('a').forEach((slideLink) => {
    slideLink.setAttribute('tabindex', '0');
  });
};

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
    on: {
      init: () => {
        initCurrentSlide();
      },
      slideChange: () => {
        initCurrentSlide();
      },
      slideChangeTransitionStart: () => {
        initCurrentSlide();
      },
    },
  });
  swiper.update();
};

initHeroSlider();
