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
//# sourceMappingURL=main.js.map
