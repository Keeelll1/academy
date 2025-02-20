const dropdown = () => {
    const arrow = document.querySelector('.arrow'),
        dropdownMenu = document.querySelector('.dropdown-menu')

        arrow.addEventListener('click', () => {
            arrow.classList.toggle('arrow-active')

            dropdownMenu.classList.toggle('dropdown-menu-active')
        })
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

const accordion = () => {
    const accordionItem = document.querySelectorAll('.accordion-item')

    accordionItem.forEach(item => {
        item.addEventListener('click', function(){
            this.classList.toggle('accordion-active')
        })
    })
}

accordion();
