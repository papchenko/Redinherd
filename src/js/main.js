// header scroll
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
};
window.addEventListener('scroll', scrollHeader);

// menu
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
// scrollup
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    }
    else {
        scrollUp.classList.remove('show-scroll');
    }
};
window.addEventListener('scroll', scrollUp);

// gsap
import { gsap } from "gsap";
gsap.from('.logo-intro-animation', {duration: 4.5, opacity: 0, ease: 'power2.in'});
gsap.from('.text-intro-animation', {duration: 2.5, opacity: 0, ease: 'power2.in'});
gsap.from('.social-intro-animation', {duration: 3.5, opacity: 0, ease: 'power2.in'});
gsap.from('.scroll-intro-animation', {duration: 5.5, opacity: 0, ease: 'power2.in'});
gsap.to(".deco-1-animation", {rotation: 360, y: 100, duration: 1});
gsap.to(".deco-4-animation", {rotation: 360, y: 100, duration: 1});
gsap.from('.deco-1-animation', {x: -100, duration: 1, opacity: 0, ease: 'power1.in'});
gsap.from('.deco-2-animation', {y: -100, duration: 1, opacity: 0, ease: 'power1.in'});
gsap.from('.deco-3-animation', {y: -50, duration: 1, opacity: 0, ease: 'power1.in'});
gsap.from('.deco-5-animation', {x: -150, duration: 1, opacity: 0, ease: 'power1.in'});
gsap.from('.deco-6-animation', {y: -150, duration: 1, opacity: 0, ease: 'power1.in'});

// swiper
import Swiper from "swiper";
import "swiper/css";

new Swiper('.new-swiper', {
spaceBetween: 16,
slidesPerView: "auto",
loop: true,
breakpoints: {
    320: {
    slidesPerView: 1.2,
    centeredSlides: true,
    },
    768: {
    slidesPerView: 3,
    },
},
});