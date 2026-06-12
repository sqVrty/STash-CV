import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { useGallery } from "../../providers/GalleryProvider";
import { useModalEffects } from "../../hooks/useModalEffects";
import { CrossIcon } from "../../assets/icons";

import classes from "./ImagesFullScreenPreviewModal.module.scss";
import "./ImagesFullScreenPreviewModal.scss";

export default function ImagesFullScreenPreviewModal() {
  const { isOpen, images, activeIndex, closeGallery, setActiveIndex } =
    useGallery();

  const [currentIndex, setCurrentIndex] = useState(activeIndex);
  const swiperRef = useRef<SwiperRef | null>(null);

  useEffect(() => {
    setCurrentIndex(activeIndex);
  }, [activeIndex]);

  const handleClose = useCallback(() => {
    setActiveIndex(currentIndex);
    closeGallery();
  }, [currentIndex, setActiveIndex, closeGallery]);

  useModalEffects(isOpen, handleClose);

  const handleOverlayClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) handleClose();
    },
    [handleClose]
  );

  useEffect(() => {
    const handleArrowKeys = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") swiperRef.current?.swiper.slideNext();
      if (event.key === "ArrowLeft") swiperRef.current?.swiper.slidePrev();
    };

    document.addEventListener("keydown", handleArrowKeys);
    return () => document.removeEventListener("keydown", handleArrowKeys);
  }, []);

  if (!isOpen) return null;

  return (
    <div className={classes.overlay} onClick={handleOverlayClick}>
      <div className={classes.modal}>
        <div className={classes.headerContainer}>
          <h2 className={classes.text}>
            {currentIndex + 1} / {images.length}
          </h2>
          <CrossIcon onClick={handleClose} className={classes.crossIcon} />
        </div>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          navigation
          speed={0}
          initialSlide={activeIndex}
          modules={[Navigation]}
          onSlideChange={(instance: SwiperType) =>
            setCurrentIndex(instance.activeIndex)
          }
          className="swiper-carousel-modal"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={`${image}-${index}`}
              className="image-wrapper-modal-carousel"
            >
              <img
                src={image}
                className="slide-image-modal-carousel"
                alt="slide image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
