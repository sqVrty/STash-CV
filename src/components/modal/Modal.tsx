import { useCallback, type MouseEvent } from "react";

import { useModal } from "@/providers/ModalProvider";
import { useModalEffects } from "@/hooks/useModalEffects";
import { CrossIcon } from "@/assets/icons";

import classes from "./Modal.module.scss";

export default function Modal() {
  const { isOpen, header, content, closeModal } = useModal();

  useModalEffects(isOpen, closeModal);

  const handleOverlayClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) closeModal();
    },
    [closeModal]
  );

  if (!isOpen) return null;

  return (
    <div className={classes.overlay} onClick={handleOverlayClick}>
      <div className={classes.modal}>
        <div className={classes.header}>
          <h2>{header}</h2>
          <CrossIcon
            width={25}
            height={25}
            onClick={closeModal}
            className={classes.crossIcon}
          />
        </div>
        {content}
      </div>
    </div>
  );
}
