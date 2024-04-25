import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import './ProductCarousel.css'

export default function ProductCarousel() {
  return (
    <>
      <Swiper 
      navigation={true} 
      modules={[Navigation]}
      Pagination={true} 
      className="mySwiper"
      >
        <SwiperSlide><img src="https://universalmusic.vtexassets.com/assets/vtex.file-manager-graphql/images/df997fa5-a7f6-470f-b299-9935b89798da___90a117257509e2564c0c1adab85424cb.jpg" alt="produto1"></img></SwiperSlide>
        <SwiperSlide><img src="https://universalmusic.vtexassets.com/assets/vtex.file-manager-graphql/images/1a4cea65-006c-4e4f-beea-eb543eeb7ae8___d075c22651b72d77c02de79f5d98a8b3.jpg" alt="produto2"></img></SwiperSlide>
        <SwiperSlide><img src="https://universalmusic.vtexassets.com/assets/vtex.file-manager-graphql/images/6167a37c-336e-48c5-b77c-07c2bdaab10b___7eda8e83ad1ee1b24249d9e80cd9e30f.png" alt="produto3"></img></SwiperSlide>
        <SwiperSlide><img src="https://universalmusic.vtexassets.com/assets/vtex.file-manager-graphql/images/7b721314-a56d-4618-bd5e-68f3cde92a5b___494f2ddc573e7d232ba4af0fec76c10b.jpg" alt="produto4" ></img></SwiperSlide>
      </Swiper>
    </>
  );
}