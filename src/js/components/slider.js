import Swiper, { Navigation, Scrollbar } from 'swiper';
Swiper.use([Navigation, Scrollbar]);
const swiper = new Swiper('.trainers__content', {
  spaceBetween: 20,
  slidesPerView: 1.375,
  scrollbar: {
    el: '.trainers__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.trainers__slider-btn--next',
    prevEl: '.trainers__slider-btn--prev',
  },
  breakpoints: {
    576: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 'auto',
      spaceBetween: 40,
    }
  }
});
