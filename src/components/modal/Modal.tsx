import { useCallback, useEffect, MouseEvent, ReactNode } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setIsOpen } from "../../redux/features/modalSlice";

import { CrossIcon } from "../../../public/assets/svg's";

import classes from "./Modal.module.scss";

export default function Modal({
  header,
  children,
}: {
  header: string;
  children: ReactNode;
}) {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isOpen);

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
  ) : null;
}
