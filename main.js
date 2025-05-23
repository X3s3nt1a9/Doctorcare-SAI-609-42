const buttonMenu = document.querySelector('.mobile-navigation__header-button')
const mobileNavigation = document.querySelector('.mobile-navigation')

buttonMenu.addEventListener('click', buttonMenuClicked)

function buttonMenuClicked() {
    mobileNavigation.classList.toggle('opened')
}