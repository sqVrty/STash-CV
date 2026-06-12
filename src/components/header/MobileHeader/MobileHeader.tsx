import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import { useModal } from "../../../providers/ModalProvider";

import BurgerMenu from "./BurgerMenu";
import LanguagesModalContent from "../../languagesModalContent/LanguagesModalContent";

import { MyAvatar } from "../../../assets/images";
import { MenuIcon, GlobusIcon } from "../../../assets/icons";
import { COLORS } from "../../../assets/colors";

import classes from "./MobileHeader.module.scss";

export default function MobileHeader() {
  const { t, i18n } = useTranslation();
  const { openModal } = useModal();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [i18n.language]);

  useEffect(() => {
    if (!isBurgerMenuOpen) return;

    const preventScroll = (event: TouchEvent) => event.preventDefault();

    document.body.style.overflow = "hidden";
    document.body.addEventListener("touchmove", preventScroll, {
      passive: false,
    });

    return () => {
      document.body.style.overflow = "auto";
      document.body.removeEventListener("touchmove", preventScroll);
    };
  }, [isBurgerMenuOpen]);

  const handleGlobusClick = useCallback(() => {
    openModal(t("modals.lngModal.h"), <LanguagesModalContent />);
  }, [openModal, t]);

  const typeSequence = (
    t("photoContainer.typesOfWork", { returnObjects: true }) as string[]
  ).flatMap((value) => [value, 3000]);

  return (
    <div className="mobileHeader">
      <div className={classes.container}>
        <div className={classes.paddingContainer}>
          <Link to="/" className={classes.leftBlock}>
            <img src={MyAvatar} className={classes.avatarImage} />
            <div className={classes.textContainer}>
              <p className={classes.name}>{t("photoContainer.name")}</p>
              <TypeAnimation
                key={animationKey}
                sequence={typeSequence}
                className={classes.career}
                style={{ color: COLORS.aqua }}
                repeat={Infinity}
              />
            </div>
          </Link>
          <div className={classes.rightBlock}>
            <GlobusIcon
              stroke={COLORS.white}
              width={24}
              height={24}
              onClick={handleGlobusClick}
            />
            <MenuIcon
              fill={COLORS.white}
              width={24}
              height={24}
              onClick={() => setIsBurgerMenuOpen((prev) => !prev)}
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
