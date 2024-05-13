import { useState, useRef } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import { LeftArrowIcon, RightArrowIcon } from "../../../assets/svg's";

import classes from "./ScreenShotsCarousel.module.scss";

export default function ScreenShotsCarousel({ data }: { data: string[] }) {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const paginationRef = useRef(null);

  const slidePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className={classes.container}>
      <Swiper
        onSwiper={setSwiper}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className={classes.swiperContainer}
      >
        {data.map((img, index) => (
          <SwiperSlide className={classes.swiperSlide} key={index}>
            <div className={classes.imageContainer}>
              <img src={img} className={classes.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={classes.navigationContainer}>
        <button className={classes.button} onClick={slidePrev}>
          <LeftArrowIcon width={30} height={30} className={classes.icon} />
        </button>

        <div ref={paginationRef} className={classes.pagination} />

        <button className={classes.button} onClick={slideNext}>
          <RightArrowIcon width={30} height={30} className={classes.icon} />
        </button>
      </div>
    </div>
  );
}
