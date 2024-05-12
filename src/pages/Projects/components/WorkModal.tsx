import { useCallback, useEffect, useState, MouseEvent, ReactNode } from "react";

import { COLORS } from "../../../assets/colors";
import { CrossIcon } from "../../../assets/svg's";

import classes from "./WorkModal.module.scss";

function Modal({
  isOpen,
  setIsOpen,
  mainImg,
  header,
  category,
  date,
  client,
  text1,
  imgsArray,
  text2,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  mainImg: string;
  header: string;
  category: string;
  date: string;
  client: string;
  text1: string;
  imgsArray: string[];
  text2: string;
}) {
  const openModal = () => {
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    },
    [isOpen]
  );

  useEffect(() => {
    if (isOpen) {
      openModal();
      document.addEventListener("keydown", handleEscapeKey);
      return () => {
        document.removeEventListener("keydown", handleEscapeKey);
      };
    }
  }, [isOpen, handleEscapeKey]);

  return isOpen ? (
    <div className={classes.overlay} onClick={handleOverlayClick}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <div className={classes.content}>
          <div className={classes.header}>
            <h2>{header}</h2>
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

export default Modal;
