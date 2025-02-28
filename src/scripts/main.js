const dropdown = () => {
    const arrow = document.querySelector('.arrow'),
        dropdownMenu = document.querySelector('.dropdown-menu'),
        dropdownContent = document.querySelector('.dropdown-content')

    dropdownContent.addEventListener('click', () => {
        arrow.classList.toggle('arrow-active')

        dropdownMenu.classList.toggle('dropdown-menu-active')
    })
};

const feedback = () => {
    const btn = document.querySelectorAll('.feedback-block-btn'),
        overlay = document.querySelector('.overlay'),
        cross = document.querySelector('.small-cross')

    btn.forEach(button => {
        button.addEventListener('click', () => {
            overlay.classList.add('show')

            cross.addEventListener('click', () => {
                overlay.classList.remove('show')
            })
        })
    })
}

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

const partnerSlider = () => {
    const partnerContent = document.querySelector('.partner-content');
    const items = document.querySelectorAll('.partner-content-item');

    if (window.innerWidth > 900) return;

    if (!partnerContent || items.length === 0) return;

    const partnerItemsClone = Array.from(items).map(item => item.cloneNode(true));
    partnerItemsClone.forEach(item => partnerContent.appendChild(item));

    let contentWidth = partnerContent.scrollWidth;
    partnerContent.style.transform = 'translateX(0)';
    partnerContent.style.transition = 'transform 0.2s linear';

    let currentPosition = 0;
    const slideSpeed = 0.5;
    const intervalTime = 16;

    function animateSlider() {
        currentPosition -= slideSpeed;

        if (Math.abs(currentPosition) >= contentWidth / 2) {
            currentPosition = 0;
            partnerContent.style.transition = 'none';
            partnerContent.style.transform = `translateX(${currentPosition}px)`;
            setTimeout(() => {
                partnerContent.style.transition = 'transform 0.2s linear';
            }, 50);
        } else {
            partnerContent.style.transform = `translateX(${currentPosition}px)`;
        }
    }

    setInterval(animateSlider, intervalTime);
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

    if (!overlay || !overlayImg) return;

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

        if (btn && text.scrollHeight <= text.clientHeight) {
            btn.remove();
        }
    })
}

const sliderScroll = () => {
    const videoLines = document.querySelectorAll('.feedback-video-content-line');
    const SPEED = 1;
    const SCROLL_INTERVAL = 16;

    // Функция для определения мобильного устройства
    const isMobile = window.innerWidth <= 768; // Мобильные устройства с шириной экрана до 768px

    // Функция для инициализации слайдера
    function initSlider(line, direction) {
        let isHovered = false;

        // Дублируем контент для плавного бесконечного скролла
        const originalContent = line.innerHTML;
        line.innerHTML += originalContent; // Удваиваем контент, чтобы создать бесконечную ленту

        // Скорость прокрутки для мобильных устройств (можно уменьшить скорость)
        const currentSpeed = isMobile ? 0.5 : SPEED; // Снижаем скорость на мобильных

        // Запускаем прокрутку с постоянной скоростью
        const interval = setInterval(() => {
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
        line.addEventListener('mouseenter', () => {
            isHovered = true;
        });

        // Возобновить анимацию при убирании курсора
        line.addEventListener('mouseleave', () => {
            isHovered = false;
        });
    }

    // Инициализация слайдера для каждой линии с чередованием направлений
    videoLines.forEach((line, index) => {
        const direction = index % 2 === 0 ? 'right' : 'left';
        initSlider(line, direction);
    });
};

   
document.addEventListener("DOMContentLoaded", function () {
    dropdown();
    feedback();
    sliderScroll();
    slider();
    burgerMenu();
    gallery();
    accordion();
    deleteBtn();
    partnerSlider();
})