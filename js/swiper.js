// --------------Operator Swiper-----------------------
var width = window.innerWidth;
var swiper = new Swiper(".mySwiper", {
  slidesPerView: width < 991 ? 1 : 4,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// --------------Innovation Swiper-----------------------
var swiper = new Swiper(".imgslider", {
  breakpoints: {
    1366: {
      slidesPerView: 3,
    },
    736: {
      slidesPerView: 2,
    },
    490: {
      slidesPerView: 1,
    },
  },
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});