import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useCallback, useEffect, useState, MouseEvent, ReactNode } from "react";
import { setIsOpen } from "../../../redux/features/workExampleModalInfoSlice";

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
        <div className={classes.content}>
          <div className={classes.header}>
            <h2>{data.header}</h2>
            <CrossIcon
              fill={COLORS.gray}
              width={40}
              height={40}
              onClick={closeModal}
              className={classes.crossIcon}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
