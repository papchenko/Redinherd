import { gsap } from "gsap";

export const gsapAnim = () => {
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
}