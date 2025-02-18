import '/src/styles/style.scss';
import '/src/js/header.js';
import '/src/js/footer.js';

let swiperDesktop;
let swiperMobile;

function initializeSwipers() {
  if (window.innerWidth <= 768) {
    if (!swiperMobile) {
      swiperMobile = new Swiper('.mainImgsMobile', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 10,
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
        autoplay: {
          delay: 1500,
        },
      });
    }
    if (swiperDesktop) {
      swiperDesktop.destroy(true, true);
      swiperDesktop = null;
    }
  } else {
    if (!swiperDesktop) {
      swiperDesktop = new Swiper('.mainImgs', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 10,
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
        autoplay: {
          delay: 1500,
        },
      });
    }
    if (swiperMobile) {
      swiperMobile.destroy(true, true);
      swiperMobile = null;
    }
  }
}

initializeSwipers();

window.addEventListener('resize', () => {
  initializeSwipers();
});
