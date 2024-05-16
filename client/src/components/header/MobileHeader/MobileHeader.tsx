import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  setIsOpen,
  setModalHeader,
  setModalContent,
} from "../../../redux/features/modalSlice";
import { useState, useEffect, useCallback } from "react";
import { TypeAnimation } from "react-type-animation";

import BurgerMenu from "./BurgerMenu";
import LanguagesModalContent from "../../languagesModalContent/LanguagesModalContent";

import { MyAvatar } from "../../../assets/img's";
import { MenuIcon, GlobusIcon } from "../../../assets/svg's";
import { COLORS } from "../../../assets/colors";

import classes from "./MobileHeader.module.scss";

export default function MobileHeader() {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  const [animationKey, setAnimationKey] = useState<number>(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [i18n.language]);

  function preventScroll(event: TouchEvent) {
    event.preventDefault();
  }

  useEffect(() => {
    if (isBurgerMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.addEventListener("touchmove", preventScroll, {
        passive: false,
      });
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.removeEventListener("touchmove", preventScroll);
    };
  }, [isBurgerMenuOpen]);

  const handleGlobusClicked = useCallback(() => {
    dispatch(setModalHeader(t("modals.lngModal.h")));
    dispatch(setModalContent(<LanguagesModalContent />));
    dispatch(setIsOpen(!isModalOpen));
  }, [dispatch]);

  return (
    <div className="mobileHeader">
      <div className={classes.container}>
        <div className={classes.paddingContainer}>
          <div className={classes.leftBlock}>
            <img src={MyAvatar} className={classes.avatarImage} />
            <div className={classes.textContainer}>
              <p className={classes.name}>{t("photoContainer.name")}</p>
              <TypeAnimation
                key={animationKey}
                sequence={(
                  t("photoContainer.typesOfWork", {
                    returnObjects: true,
                  }) as string[]
                ).reduce((acc: any, currentValue: string, index: number) => {
                  acc.push(currentValue);
                  acc.push(3000);
                  return acc;
                }, [])}
                className={classes.career}
                style={{ color: COLORS.aqua }}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className={classes.rightBlock}>
            <GlobusIcon
              stroke={COLORS.white}
              width={24}
              height={24}
              onClick={() => handleGlobusClicked()}
            />
            <MenuIcon
              fill={COLORS.white}
              width={24}
              height={24}
              onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
            />
            <BurgerMenu
              isBurgerMenuOpen={isBurgerMenuOpen}
              setIsBurgerMenuOpen={setIsBurgerMenuOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
