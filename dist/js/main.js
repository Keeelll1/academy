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
var slider = function slider() {
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
};
var partnerSlider = function partnerSlider() {
  var partnerContent = document.querySelector('.partner-content');
  var items = document.querySelectorAll('.partner-content-item');
  if (window.innerWidth > 900) return;
  if (!partnerContent || items.length === 0) return;
  var partnerItemsClone = Array.from(items).map(function (item) {
    return item.cloneNode(true);
  });
  partnerItemsClone.forEach(function (item) {
    return partnerContent.appendChild(item);
  });
  var contentWidth = partnerContent.scrollWidth;
  partnerContent.style.transform = 'translateX(0)';
  partnerContent.style.transition = 'transform 0.2s linear';
  var currentPosition = 0;
  var slideSpeed = 0.5;
  var intervalTime = 16;
  function animateSlider() {
    currentPosition -= slideSpeed;
    if (Math.abs(currentPosition) >= contentWidth / 2) {
      currentPosition = 0;
      partnerContent.style.transition = 'none';
      partnerContent.style.transform = "translateX(".concat(currentPosition, "px)");
      setTimeout(function () {
        partnerContent.style.transition = 'transform 0.2s linear';
      }, 50);
    } else {
      partnerContent.style.transform = "translateX(".concat(currentPosition, "px)");
    }
  }
  setInterval(animateSlider, intervalTime);
};
var accordion = function accordion() {
  var accordionItem = document.querySelectorAll('.accordion-item');
  accordionItem.forEach(function (item) {
    item.addEventListener('click', function () {
      this.classList.toggle('accordion-active');
    });
  });
};
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
var gallery = function gallery() {
  var images = document.querySelectorAll('.photogallery-item-img'),
    overlay = document.querySelector('.overlay'),
    overlayImg = document.getElementById('overlayImg');
  if (!overlay || !overlayImg) return;
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
var deleteBtn = function deleteBtn() {
  var cards = document.querySelectorAll('.feedback-block-card');
  cards.forEach(function (card) {
    var text = card.querySelector('.feedback-block-text'),
      btn = card.querySelector('.feedback-block-btn');
    if (btn && text.scrollHeight <= text.clientHeight) {
      btn.remove();
    }
  });
};
var sliderScroll = function sliderScroll() {
  var videoLines = document.querySelectorAll('.feedback-video-content-line');
  var SPEED = 1;
  var SCROLL_INTERVAL = 16;

  // Функция для определения мобильного устройства
  var isMobile = window.innerWidth <= 768; // Мобильные устройства с шириной экрана до 768px

  // Функция для инициализации слайдера
  function initSlider(line, direction) {
    var isHovered = false;

    // Дублируем контент для плавного бесконечного скролла
    var originalContent = line.innerHTML;
    line.innerHTML += originalContent; // Удваиваем контент, чтобы создать бесконечную ленту

    // Скорость прокрутки для мобильных устройств (можно уменьшить скорость)
    var currentSpeed = isMobile ? 0.5 : SPEED; // Снижаем скорость на мобильных

    // Запускаем прокрутку с постоянной скоростью
    var interval = setInterval(function () {
      if (isHovered) return; // Останавливаем прокрутку при наведении

      if (direction === 'right') {
        line.scrollLeft += currentSpeed; // Прокрутка вправо
      } else {
        line.scrollLeft -= currentSpeed; // Прокрутка влево
      }

      // Бесконечный скролл
      if (line.scrollLeft >= line.scrollWidth / 2) {
        line.scrollLeft = 0; // При достижении конца, возвращаем к началу
      } else if (line.scrollLeft <= 0) {
        line.scrollLeft = line.scrollWidth / 2; // При достижении начала, возвращаем к концу
      }
    }, SCROLL_INTERVAL);
    if (isMobile) {
      clearInterval(interval); // Останавливаем слайдер на мобильных устройствах
    }

    // Остановить анимацию при наведении
    line.addEventListener('mouseenter', function () {
      isHovered = true;
    });

    // Возобновить анимацию при убирании курсора
    line.addEventListener('mouseleave', function () {
      isHovered = false;
    });
  }

  // Инициализация слайдера для каждой линии с чередованием направлений
  videoLines.forEach(function (line, index) {
    var direction = index % 2 === 0 ? 'right' : 'left';
    initSlider(line, direction);
  });
};
document.addEventListener("DOMContentLoaded", function () {
  dropdown();
  sliderScroll();
  slider();
  burgerMenu();
  gallery();
  accordion();
  deleteBtn();
  partnerSlider();
});
//# sourceMappingURL=main.js.map
