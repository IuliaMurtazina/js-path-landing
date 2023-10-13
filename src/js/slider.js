const breakpoint = window.matchMedia("(min-width:769px)");

let mySwiper;
const enableSwiper = function () {
  mySwiper = new Swiper(".swiper", {
    loop: true,

    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });
};

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    if (mySwiper !== undefined) mySwiper.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    return enableSwiper();
  }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
