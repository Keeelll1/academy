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
var gallery = function gallery() {
  var images = document.querySelectorAll('.photogallery-item-img'),
    overlay = document.getElementById('overlay'),
    overlayImg = document.getElementById('overlayImg');
  images.forEach(function (img) {
    img.addEventListener('click', function () {
      overlayImg.src = img.src;
      overlay.classList.add('show');
      document.body.classList.add('no-scroll');
    });
  });
  overlay.addEventListener('click', function () {
    overlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
  });
};
gallery();
var dfdsfs = function dfdsfs() {
  var cards = document.querySelectorAll('.feedback-block-card');
  cards.forEach(function (card) {
    var text = card.querySelector('.feedback-block-text'),
      btn = card.querySelector('.feedback-block-btn');
    if (text.scrollHeight <= text.clientHeight) {
      btn.remove();
    }
    console.log(text.scrollHeight);
    console.log(text.clientHeight);
  });
};
dfdsfs();
//# sourceMappingURL=main.js.map
