import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useCallback, useEffect, useState, MouseEvent, ReactNode } from "react";
import { setIsOpen } from "../../../redux/features/workExampleModalInfoSlice";

import InfoListBlock from "./InfoListBlock";
import ScreenShotsCarousel from "./ScreenShotsCarousel";

import { COLORS } from "../../../assets/colors";
import { CrossIcon } from "../../../assets/svg's";

import type { IProject } from "../../../redux/features/workExampleModalInfoSlice";

import classes from "./WorkExampleModal.module.scss";

export default function WorkExampleModal({ data }: { data: IProject }) {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.workExampleModalInfo.isOpen);

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
    document.body.style.overflow = "auto";
    document.body.removeEventListener("touchmove", preventScroll);
  }, [dispatch]);

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
        <div className={classes.mainImgContainer}>
          <img src={data.mainImg} className={classes.mainImg} />
          <CrossIcon
            width={30}
            height={30}
            className={classes.crossIcon}
            onClick={closeModal}
          />
          <div className={classes.contentContainer}>
            <h1 className={classes.header}>{data.header}</h1>
            <p className={classes.categoty} style={{ color: COLORS.gray }}>
              {data.category}
            </p>
            <div className={classes.infoListContainer}>
              <InfoListBlock fieldName="Date" answer={data.date} />
              <InfoListBlock fieldName="Client" answer={data.client} />
              <InfoListBlock
                fieldName="Category"
                answer={data.category}
                isLastElement
              />
            </div>
            <p className={classes.desc} style={{ color: COLORS.gray }}>
              {data.text1}
            </p>
            <div className={classes.screenShotsCarouselContainer}>
              <ScreenShotsCarousel data={data.imgsArray} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
