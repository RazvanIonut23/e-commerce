import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import s from "./HomeCarousel.module.css";
import img1 from "../../images/img1.webp";
import img2 from "../../images/img2.webp";
import img3 from "../../images/img3.avif";

const HomeCarousel = () => {
  return (
    <div className={s.carouselRoot}>
      <Carousel
        className={s.carouselContainer}
        infiniteLoop
        autoPlay
        showArrows={false}
        showIndicators={true}
        showThumbs={false}
      >
        {/* {image} */}
        <div>
          <img className={s.carouselImg} src={img1} alt="dasd" />
        </div>
        <div>
          <img className={s.carouselImg} src={img2} alt="dasd" />
        </div>
        <div>
          <img className={s.carouselImg} src={img3} alt="dasd" />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
