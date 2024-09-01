import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const initReviewsSlider = () => {
  const reviewsSlider = document.querySelector('[data-slider="reviews-slider"]');
  if (!reviewsSlider) {
    return;
  }

  const swiper = new Swiper('.reviews__slider', {
    modules: [Navigation],
    simulateTouch: false,
    grabCursor: false,
    watchOverflow: true,
    speed: 500,
    slidesPerView: 'auto',
    loop: false,
    navigation: {
      nextEl: '.reviews__slider-button--next',
      prevEl: '.reviews__slider-button--prev',
      disabledClass: 'slider-control__button--disabled',
    },
    breakpoints: {
      320: {
        initialSlide: 0,
        spaceBetween: 20,
        autoHeight: true,
      },
      768: {
        spaceBetween: 30,
        autoHeight: false,
      },
      1440: {
        spaceBetween: 120,
        autoHeight: false,
      }
    }
  });

  swiper.update();

  const list = document.querySelector('.reviews').querySelector('.swiper-wrapper');

  if (window.innerWidth >= 1440) {
    list.style.width = '1320px';
  } else if (window.innerWidth < 1440 && window.innerWidth >= 768) {
    list.style.width = '723px';
  } else if (window.innerWidth >= 320 && window.innerWidth < 768) {
    list.style.width = '320px';
  }

  const items = document.querySelector('.reviews').querySelectorAll('.swiper-slide');

  for (const item of items) {
    item.style.display = 'grid';
    if (window.innerWidth >= 1440) {
      document.querySelector('.reviews').querySelector('.swiper').style.marginLeft = '10px';
      item.style.width = '700px';
    } else if (window.innerWidth < 1440 && window.innerWidth >= 768) {
      item.style.width = '565px';
    } else if (window.innerWidth >= 320 && window.innerWidth < 768) {
      item.style.width = '290px';
    }
  }

  document.querySelector('.reviews').querySelector('.swiper').style.overflow = 'visible';
};

initReviewsSlider();
