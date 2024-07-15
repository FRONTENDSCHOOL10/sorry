document.addEventListener('DOMContentLoaded', () => {
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
   });
});
