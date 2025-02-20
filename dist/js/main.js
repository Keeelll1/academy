"use strict";

var dropdown = function dropdown() {
  var arrow = document.querySelector('.arrow'),
    dropdownMenu = document.querySelector('.dropdown-menu');
  arrow.addEventListener('click', function () {
    arrow.classList.toggle('arrow-active');
    dropdownMenu.classList.toggle('dropdown-menu-active');
  });
};
dropdown();
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets"
    }
  });
});
var accordion = function accordion() {
  var accordionItem = document.querySelectorAll('.accordion-item');
  accordionItem.forEach(function (item) {
    item.addEventListener('click', function () {
      this.classList.toggle('accordion-active');
    });
  });
};
accordion();
//# sourceMappingURL=main.js.map
