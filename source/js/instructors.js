import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const initInsrtuctorsSlider = () => {
  if (!document.querySelector('[data-slider="instructors-slider"]')) {
    return;
  }

  const swiper = new Swiper('.instructors__slider', {
    modules: [Navigation],
    loop: false,
    navigation: {
      nextEl: '.instructors__slider-button--next',
      prevEl: '.instructors__slider-button--prev',
      disabledClass: 'slider-control__button--disabled',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 18,
        initialSlide: 2,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });

  swiper.update();

  const items = document.querySelector('.instructors').querySelectorAll('.swiper-slide');
  for (const item of items) {
    item.style.display = 'grid';
  }

  const list = document.querySelector('.instructors').querySelector('.swiper-wrapper');

  if (window.innerWidth >= 1440) {
    list.style.width = '1200px';
  } else if (window.innerWidth < 1440 && window.innerWidth >= 768) {
    list.style.width = '678px';
  } else if (window.innerWidth >= 320 && window.innerWidth < 768) {
    list.style.width = '290px';
  }
};

initInsrtuctorsSlider();
