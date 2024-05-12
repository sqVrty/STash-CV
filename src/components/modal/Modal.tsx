import { useCallback, useEffect, useState, MouseEvent, ReactNode } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setIsOpen } from "../../redux/features/modalSlice";

import { CrossIcon } from "../../assets/svg's";

import classes from "./Modal.module.scss";

function Modal({ header, children }: { header: string; children: ReactNode }) {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isOpen);

  const openModal = () => {
    document.body.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    dispatch(setIsOpen(false));

    document.body.style.overflow = "auto";
  }, [dispatch]);

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
              width={25}
              height={25}
              onClick={closeModal}
              className={classes.crossIcon}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;
