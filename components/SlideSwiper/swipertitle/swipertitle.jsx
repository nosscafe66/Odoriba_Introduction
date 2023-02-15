// some-inner-component.jsx
import { React } from 'react';
import { useSwiperSlide } from 'swiper/react';

export function SlideTitle() {
  const swiperSlide = useSwiperSlide();
  return (
    <p>Current slide is {swiperSlide.isActive ? 'active' : 'not active'}</p>
  );
}
