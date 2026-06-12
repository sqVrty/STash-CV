import { useState, useRef, useCallback, useEffect } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useGallery } from "../../../providers/GalleryProvider";
import { LeftArrowIcon, RightArrowIcon } from "../../../assets/icons";

import classes from "./ScreenShotsCarousel.module.scss";

export default function ScreenShotsCarousel({ images }: { images: string[] }) {
  const { activeIndex, openGallery, resetActiveIndex } = useGallery();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const swiperRef = useRef<SwiperRef | null>(null);
  const paginationRef = useRef(null);

  const openFullScreen = useCallback(() => {
    openGallery(images, swiperRef.current?.swiper.activeIndex ?? 0);
  }, [images, openGallery]);

  // Sync the carousel position with the last image viewed in the gallery.
  useEffect(() => {
    setCurrentIndex(activeIndex);
    swiperRef.current?.swiper.slideTo(activeIndex, 0);
  }, [activeIndex]);

  // Reset the shared index when the carousel leaves the screen.
  useEffect(() => resetActiveIndex, [resetActiveIndex]);

  return (
    <div className={classes.container}>
      <Swiper
        ref={swiperRef}
        onSwiper={setSwiper}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        initialSlide={currentIndex}
        onSlideChange={(instance: SwiperType) =>
          setCurrentIndex(instance.activeIndex)
        }
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
        pagination={{ el: paginationRef.current, clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={classes.swiperContainer}
      >
        {images.map((image, index) => (
          <SwiperSlide
            className={`${classes.swiperSlide} ${
              image.includes("EmotionalApp") ? classes.mobileScreenshot : ""
            }`}
            key={index}
          >
            <div className={classes.imageContainer} onClick={openFullScreen}>
              <img src={image} className={classes.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={classes.navigationContainer}>
        <button className={classes.button} onClick={() => swiper?.slidePrev()}>
          <LeftArrowIcon width={30} height={30} className={classes.icon} />
        </button>

        <div ref={paginationRef} className={classes.pagination} />

        <button className={classes.button} onClick={() => swiper?.slideNext()}>
          <RightArrowIcon width={30} height={30} className={classes.icon} />
        </button>
      </div>
    </div>
  );
}
