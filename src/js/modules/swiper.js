import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';

export const slider = () => {
    new Swiper('.new-swiper', {
        modules: [Pagination],
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
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
    });
}