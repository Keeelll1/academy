const dropdown = () => {
    const arrow = document.querySelector('.arrow'),
        dropdownMenu = document.querySelector('.dropdown-menu'),
        dropdownContent = document.querySelector('.dropdown-content')

        dropdownContent.addEventListener('click', () => {
            arrow.classList.toggle('arrow-active')

            dropdownMenu.classList.toggle('dropdown-menu-active')
        })
};

const slider = () => {
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
}

const accordion = () => {
    const accordionItem = document.querySelectorAll('.accordion-item')

    accordionItem.forEach(item => {
        item.addEventListener('click', function(){
            this.classList.toggle('accordion-active')
        })
    })
}

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

const gallery = () => {
    const images = document.querySelectorAll('.photogallery-item-img'),
        overlay = document.querySelector('.overlay'),
        overlayImg = document.getElementById('overlayImg');

        images.forEach(img => {
            img.addEventListener('click', () => {
                overlayImg.src = img.src;
                overlay.classList.add('show');
                document.body.classList.add('no-scroll');
            });
        });

        overlay.addEventListener('click', () => {
            overlay.classList.remove('show');
            document.body.classList.remove('no-scroll');
        });
}

const deleteBtn = () => {
    const cards = document.querySelectorAll('.feedback-block-card')

    cards.forEach(card => {
        const text = card.querySelector('.feedback-block-text'),
            btn = card.querySelector('.feedback-block-btn')

        if (text.scrollHeight <= text.clientHeight){
            btn.remove();
        }
    })
}

document.addEventListener("DOMContentLoaded", function () {
    slider();
    burgerMenu();
    gallery();
    accordion();
    dropdown();
    deleteBtn();
})