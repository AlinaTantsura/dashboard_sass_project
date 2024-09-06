import "../scss/main.scss";

import * as bodyScrollLock from 'body-scroll-lock';

//Sidebar menu
const refsMenu = {
    openMenuBtn: document.querySelector('.js-menu-open'),
    closeMunuBtn: document.querySelector('js-menu-close'),
    overlayMenu: document.querySelector('.js-menu'),
};

const toggleMenu = () => {
    const isOpenMenu =
        refsMenu.openMenuBtn.getAttribute('aria-expanded') === "true" || false;
    refsMenu.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    refsMenu.overlayMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
};

refsMenu.openMenuBtn.addEventListener('click', toggleMenu)
refsMenu.closeMenuBtn.addEventListener('click', toggleMenu)
