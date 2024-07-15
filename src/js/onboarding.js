document.addEventListener('DOMContentLoaded', () => {
   // 기본 Swiper 초기화
   const swiper = new Swiper('.Sample', {
      loop: true,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      speed: 600,
   });

   // 모바일 전용 Swiper 초기화
   const swiperMobile = new Swiper('.mainImgsMobile', {
      loop: true,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      speed: 600,
   });

   // 리사이즈 이벤트 처리
   window.addEventListener('resize', () => {
      swiper.update();
      swiperMobile.update();
   });
});
