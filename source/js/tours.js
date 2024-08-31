import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const initToursSlider = () => {
  if (!document.querySelector('[data-slider="tours-slider"]')) {
    return;
  }

  const swiper = new Swiper('.tours__slider', {
    modules: [Navigation],
    loop: false,
    navigation: {
      nextEl: '.tours__slider-button--next',
      prevEl: '.tours__slider-button--prev',
      disabledClass: 'slider-control__button--disabled',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  });
  swiper.update();

  const items = document.querySelector('.tours').querySelectorAll('.swiper-slide');
  for (const item of items) {
    item.style.display = 'flex';
  }

  const list = document.querySelector('.tours').querySelector('.swiper-wrapper');

  if (window.innerWidth >= 1440) {
    list.style.width = '1200px';
  } else if (window.innerWidth < 1440 && window.innerWidth >= 768) {
    list.style.width = '678px';
  } else if (window.innerWidth >= 320 && window.innerWidth < 768) {
    list.style.width = '290px';
  }
};

initToursSlider();
