const swiper_case0 = new Swiper('.swiper-container__case0', {
  slidesPerView: 1,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiper_case1 = new Swiper('.swiper-container__case1', {
  slidesPerView: 7.3, // 기본적으로 큰 화면에서 보여지는 슬라이드 개수
  spaceBetween: 10, // 슬라이드 간의 간격
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    enabled: true,
    prevSlideMessage: '이전 포스터입니다',
    nextSlideMessage: '다음 포스터입니다',
    firstSlideMessage: '맨 처음 포스터입니다.',
    lastSlideMessage: '마지막 포스터입니다.',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    1: {
      slidesPerView: 1,
    },
    // 320px 이하일 때
    320: {
      slidesPerView: 2,
    },
    // 321px 이상 768px 이하일 때
    321: {
      slidesPerView: 3,
    },
    // 769px 이상일 때
    769: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 7,
    },
  },
});

const swiper_case2 = new Swiper('.swiper-container__case2', {
  slidesPerView: 5.1, // 기본적으로 큰 화면에서 보여지는 슬라이드 개수
  spaceBetween: 10, // 슬라이드 간의 간격
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  a11y: {
    enabled: true,
    prevSlideMessage: '이전 포스터입니다',
    nextSlideMessage: '다음 포스터입니다',
    firstSlideMessage: '맨 처음 포스터입니다.',
    lastSlideMessage: '마지막 포스터입니다.',
  },
  breakpoints: {
    1: {
      slidesPerView: 1,
    },
    // 320px 이하일 때
    320: {
      slidesPerView: 1,
    },
    // 321px 이상 768px 이하일 때
    321: {
      slidesPerView: 2,
    },
    // 769px 이상일 때
    769: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 5,
    },
  },
});

const swiper_case3 = new Swiper('.swiper-container__case3', {
  slidesPerView: 7.3, // 기본적으로 큰 화면에서 보여지는 슬라이드 개수
  spaceBetween: 10, // 슬라이드 간의 간격
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  a11y: {
    enabled: true,
    prevSlideMessage: '이전 포스터입니다',
    nextSlideMessage: '다음 포스터입니다',
    firstSlideMessage: '맨 처음 포스터입니다.',
    lastSlideMessage: '마지막 포스터입니다.',
  },
  breakpoints: {
    1: {
      slidesPerView: 1,
    },
    // 320px 이하일 때
    320: {
      slidesPerView: 2,
    },
    // 321px 이상 768px 이하일 때
    321: {
      slidesPerView: 3,
    },
    // 769px 이상일 때
    769: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 7,
    },
  },
});

const swiper_case4 = new Swiper('.swiper-container__case4', {
  slidesPerView: 5.1, // 기본적으로 큰 화면에서 보여지는 슬라이드 개수
  spaceBetween: 10, // 슬라이드 간의 간격
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    enabled: true,
    prevSlideMessage: '이전 포스터입니다',
    nextSlideMessage: '다음 포스터입니다',
    firstSlideMessage: '맨 처음 포스터입니다.',
    lastSlideMessage: '마지막 포스터입니다.',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  breakpoints: {
    1: {
      slidesPerView: 1,
    },
    // 320px 이하일 때
    320: {
      slidesPerView: 2,
    },
    // 321px 이상 768px 이하일 때
    321: {
      slidesPerView: 3,
    },
    // 769px 이상일 때
    769: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 5,
    },
  },
});

const swiper_case5 = new Swiper('.swiper-container__case5', {
  slidesPerView: 5.1, // 기본적으로 큰 화면에서 보여지는 슬라이드 개수
  spaceBetween: 10, // 슬라이드 간의 간격
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    enabled: true,
    prevSlideMessage: '이전 포스터입니다',
    nextSlideMessage: '다음 포스터입니다',
    firstSlideMessage: '맨 처음 포스터입니다.',
    lastSlideMessage: '마지막 포스터입니다.',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    1: {
      slidesPerView: 1,
    },
    // 320px 이하일 때
    320: {
      slidesPerView: 2,
    },
    // 321px 이상 768px 이하일 때
    321: {
      slidesPerView: 3,
    },
    // 769px 이상일 때
    769: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 6,
    },
  },
});

const swiper_case6 = new Swiper('.swiper-container__case6', {
  slidesPerView: 5.1, // 기본적으로 큰 화면에서 보여지는 슬라이드 개수
  spaceBetween: 10, // 슬라이드 간의 간격
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    enabled: true,
    prevSlideMessage: '이전 포스터입니다',
    nextSlideMessage: '다음 포스터입니다',
    firstSlideMessage: '맨 처음 포스터입니다.',
    lastSlideMessage: '마지막 포스터입니다.',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    1: {
      slidesPerView: 1,
    },
    // 320px 이하일 때
    320: {
      slidesPerView: 2,
    },
    // 321px 이상 768px 이하일 때
    321: {
      slidesPerView: 2,
    },
    // 769px 이상일 때
    769: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 5,
    },
  },
});
