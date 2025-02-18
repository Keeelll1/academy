const dropdown = () => {
    const arrow = document.querySelector('.arrow'),
        dropdownMenu = document.querySelector('.dropdown-menu')

        arrow.addEventListener('click', () => {
            arrow.classList.toggle('arrow-active')

            dropdownMenu.classList.toggle('dropdown-menu-active')
        })
};

dropdown();