"use strict";

var dropdown = function dropdown() {
  var arrow = document.querySelector('.arrow'),
    dropdownMenu = document.querySelector('.dropdown-menu'),
    dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.addEventListener('click', function () {
    arrow.classList.toggle('arrow-active');
    dropdownMenu.classList.toggle('dropdown-menu-active');
  });
};
dropdown();
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 11,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets"
    },
    breakpoints: {
      1250: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      0: {
        slidesPerView: 1
      }
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
var burgerMenu = function burgerMenu() {
  var burgerBtn = document.querySelector('.burger-icon'),
    burgerContent = document.querySelector('.burger__menu__content'),
    cross = document.querySelector('.cross__burger__menu');
  burgerBtn.addEventListener('click', function () {
    burgerContent.classList.add('burger__menu__content-active');
    cross.addEventListener('click', function () {
      burgerContent.classList.remove('burger__menu__content-active');
    });
  });
};
burgerMenu();
//# sourceMappingURL=main.js.map
