import { useCallback, useEffect, MouseEvent, useRef, useState } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  setIsOpen,
  setActiveIndex,
} from "../../redux/features/imagesFullScreenPreviewModalSlice";

import { CrossIcon } from "../../assets/svg's";

import classes from "./ImagesFullScreenPreviewModal.module.scss";
import "./imagesFullScreenPreviewModal.scss";

export default function ImagesFullScreenPreviewModal({
  images,
  activeIndex,
}: {
  images: string[];
  activeIndex: number;
}) {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(
    (state) => state.imagesFullScreenPreview.isOpen
  );

  const [activeIndexCurr, setActiveIndexCurr] = useState<number>(
    activeIndex || 0
  );
  useEffect(() => {
    if (activeIndex) {
      setActiveIndexCurr(activeIndex);
    }
  }, [activeIndex]);
  const swiperRef = useRef<SwiperRef | null>(null);

  function preventScroll(event: TouchEvent) {
    event.preventDefault();
  }

  const openModal = useCallback(() => {
    document.body.style.overflow = "hidden";
    document.body.addEventListener("touchmove", preventScroll, {
      passive: false,
    });
  }, []);

  const closeModal = useCallback(() => {
    dispatch(setIsOpen(false));
    dispatch(setActiveIndex(activeIndexCurr));
    document.body.style.overflow = "auto";
    document.body.removeEventListener("touchmove", preventScroll);
  }, [dispatch, activeIndexCurr]);

  const handleOverlayClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    },
    [isOpen, closeModal]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (swiperRef.current) {
        if (event.key === "ArrowRight") {
          swiperRef.current.swiper.slideNext();
        } else if (event.key === "ArrowLeft") {
          swiperRef.current.swiper.slidePrev();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [swiperRef]);

  useEffect(() => {
    if (isOpen) {
      openModal();
      document.addEventListener("keydown", handleEscapeKey);
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.removeEventListener("touchmove", preventScroll);
    };
  }, [isOpen, openModal, handleEscapeKey]);

  return isOpen ? (
    <div className={classes.overlay} onClick={handleOverlayClick}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <div className={classes.headerContainer}>
          <h2 className={classes.text}>
            {activeIndexCurr + 1} / {images.length}
          </h2>
          <CrossIcon onClick={closeModal} className={classes.crossIcon} />
        </div>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          navigation={true}
          speed={0}
          initialSlide={activeIndex}
          modules={[Navigation]}
          onSlideChange={(swiper) => setActiveIndexCurr(swiper.activeIndex)}
          className="swiper-carousel-modal"
        >
          {images.map((item, index) => (
            <SwiperSlide
              key={`${item}-${index}`}
              className="image-wrapper-modal-carousel"
            >
              <img
                src={item}
                className="slide-image-modal-carousel"
                alt="slide image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  ) : null;
}
