import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const initGallerySlider = () => {
  const gallerySlider = document.querySelector('[data-slider="gallery-slider"]');
  if (!gallerySlider) {
    return;
  }

  let swiperInstance = null;
  const mediaQuery = window.matchMedia('(max-width: 1439px)');

  const initializeSlider = () => {
    if (mediaQuery.matches) {
      if (!swiperInstance) {
        swiperInstance = new Swiper('.gallery__slider', {
          modules: [Navigation],
          watchOverflow: true,
          speed: 500,
          loop: true,
          autoHeight: false,
          navigation: {
            nextEl: '.gallery__slider-button--next',
            prevEl: '.gallery__slider-button--prev',
          },
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 0,
              simulateTouch: true,
            },
            768: {
              simulateTouch: false,
              grabCursor: false,
              slidesPerView: 3,
              spaceBetween: 0,
            }
          },
        });
      }
    } else {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
    }
  };
  initializeSlider();
  mediaQuery.addEventListener('change', initializeSlider);
};

initGallerySlider();


const list = document.querySelector('.gallery').querySelector('.swiper-wrapper');

if (window.innerWidth >= 1440) {
  list.style.width = '1440px';
} else if (window.innerWidth < 1440 && window.innerWidth >= 768) {
  list.style.width = '768px';
} else if (window.innerWidth >= 320 && window.innerWidth < 768) {
  list.style.width = '320px';
}

const items = document.querySelector('.gallery').querySelectorAll('.swiper-slide');

for (const item of items) {
  item.style.display = 'flex';
  if (window.innerWidth >= 1440) {
    item.style.width = '284px';
  } else if (window.innerWidth < 1440 && window.innerWidth >= 767) {
    item.style.width = '253px';
  } else if (window.innerWidth >= 320 && window.innerWidth < 768) {
    item.style.width = '158px';
  }
}
