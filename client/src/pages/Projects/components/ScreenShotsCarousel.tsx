import { useState, useRef, useCallback, useEffect } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import {
  setIsOpen,
  setImages,
  setActiveIndex,
} from "../../../redux/features/imagesFullScreenPreviewModalSlice";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { LeftArrowIcon, RightArrowIcon } from "../../../assets/svg's";

import classes from "./ScreenShotsCarousel.module.scss";

export default function ScreenShotsCarousel({ data }: { data: string[] }) {
  const [activeIndexCurr, setActiveIndexCurr] = useState<number>(0);
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const swiperRef = useRef<SwiperRef | null>(null);
  const paginationRef = useRef(null);

  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const modalActiveIndex = useAppSelector(
    (state) => state.imagesFullScreenPreview.activeIndex
  );

  const handleImgClicked = useCallback(() => {
    dispatch(setImages(data));
    dispatch(setActiveIndex(swiperRef.current?.swiper.activeIndex || 0));
    dispatch(setIsOpen(!isModalOpen));
  }, [dispatch]);

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

  useEffect(() => {
    setActiveIndexCurr(modalActiveIndex);
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(modalActiveIndex, 0);
    }
  }, [modalActiveIndex]);

  useEffect(() => {
    return () => {
      dispatch(setActiveIndex(0)); // Сбрасываем в 0 при размонтировании
    };
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Swiper
        ref={swiperRef}
        onSwiper={setSwiper}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={activeIndexCurr}
        onSlideChange={(swiper) => setActiveIndexCurr(swiper.activeIndex)}
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
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={classes.swiperContainer}
      >
        {data.map((img, index) => (
          <SwiperSlide
            className={`${classes.swiperSlide} ${
              img.includes("EmotionalApp") && classes.mobileScreenshot
            }`}
            key={index}
          >
            <div className={classes.imageContainer} onClick={handleImgClicked}>
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
