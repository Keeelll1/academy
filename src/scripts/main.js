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

const accordion = () => {
    const accordionItem = document.querySelectorAll('.accordion-item')

    accordionItem.forEach(item => {
        item.addEventListener('click', function(){
            this.classList.toggle('accordion-active')
        })
    })
}

accordion();

const burgerMenu = () => {
    const burgerBtn = document.querySelector('.burger-icon'),
        burgerContent = document.querySelector('.burger__menu__content'),
        cross = document.querySelector('.cross__burger__menu')

        burgerBtn.addEventListener('click', () => {
            burgerContent.classList.add('burger__menu__content-active')

            cross.addEventListener('click', () => {
                burgerContent.classList.remove('burger__menu__content-active')
            })
        })
}

burgerMenu();
