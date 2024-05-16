import { useCallback, useEffect, useState, MouseEvent, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { setIsOpen } from "../../../redux/features/workExampleModalInfoSlice";

import InfoListBlock from "./InfoListBlock";
import ScreenShotsCarousel from "./ScreenShotsCarousel";

import { COLORS } from "../../../../public/assets/colors";
import { CrossIcon } from "../../../../public/assets/svg's";

import type { IProject } from "../../../redux/features/workExampleModalInfoSlice";

import classes from "./WorkExampleModal.module.scss";

export default function WorkExampleModal({ data }: { data: IProject }) {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const isMobileDevice = useAppSelector(
    (state) => state.deviceInfo.isMobileDevice
  );
  const windowSize = useAppSelector((state) => state.windowSizeInfo.windowSize);
  const isOpen = useAppSelector((state) => state.workExampleModalInfo.isOpen);

  function preventScroll(event: TouchEvent) {
    const modal = document.getElementById("modal");
    if (modal && !modal.contains(event.target as Node)) {
      event.preventDefault();
    }
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
      <div
        id="modal"
        className={classes.modal}
        style={isMobileDevice ? { height: windowSize.height + "px" } : {}}
        onClick={(e) => e.stopPropagation()}
      >
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
              <InfoListBlock
                fieldName={t("projectsPage.workExampleModal.dateH")}
                answer={data.date}
              />
              <InfoListBlock
                fieldName={t("projectsPage.workExampleModal.clientH")}
                answer={data.client}
              />
              <InfoListBlock
                fieldName={t("projectsPage.workExampleModal.categoryH")}
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
            <p className={classes.desc} style={{ color: COLORS.gray }}>
              {data.text2}
            </p>
            <div
              className={classes.line}
              style={{ backgroundColor: COLORS.gray }}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
