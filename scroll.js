function changeNavigationOnScroll() {
    let scrollPos = window.scrollY;
    const desktopNav = document.querySelector('.desktop-navigation');
    const desktopNavFixed = document.querySelector('.desktop-navigation-fixed');

    if (scrollPos > 75) {
        if (desktopNav) desktopNav.classList.add('hidden');
        if (desktopNavFixed) desktopNavFixed.style.display = 'block';
    } else {
        if (desktopNavFixed) desktopNavFixed.style.display = 'none';
        if (desktopNav) desktopNav.classList.remove('hidden');
    }
}

window.addEventListener('scroll', changeNavigationOnScroll);

