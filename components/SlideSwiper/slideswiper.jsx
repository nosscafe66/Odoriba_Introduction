import classes from './slideswiper.module.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';


export function SlideSwiper(){
    const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );
    return (
        <div className="slider__wrapper">
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        scrollbar={{ draggable: true }}
        navigation={{
            prevEl: "#button_prev",
            nextEl: "#button_next"
        }}
        pagination={{
            // パラメータを設定
            el: "#pagination"
        }}
        onSwiper={(swiper) => console.log(swiper)}
    >
            <SwiperSlide><div className={classes.page1}>Slide1</div></SwiperSlide>
            <SwiperSlide><div className={classes.page2}>Slide2</div></SwiperSlide>
            <SwiperSlide><div className={classes.page3}></div></SwiperSlide>
            <SwiperSlide><div className={classes.page4}></div></SwiperSlide>
            <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <span slot="container-start">Container Start</span>
  <span slot="container-end">Container End</span>
  <span slot="wrapper-start">Wrapper Start</span>
  <span slot="wrapper-end">Wrapper End</span>
            
        </Swiper>
        <div id="button_prev" className="swiper-button-prev"></div>
        <div id="button_next" className="swiper-button-next"></div>
        <div id="pagination" className="swiper-pagination"></div>
        </div>
    );
};