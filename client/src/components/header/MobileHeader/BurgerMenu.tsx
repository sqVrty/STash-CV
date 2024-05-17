import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import {
  setIsOpen,
  setModalHeader,
  setModalContent,
} from "../../../redux/features/modalSlice";
import { useCallback } from "react";

import NavigationElement from "./NavigationElement";
import ContactMeModalContent from "../../contactMeModalContent/ContactMeModalContent";

import {
  ProfileIcon,
  ResumeIcon,
  FolderIcon,
  ContactMeIcon,
} from "../../../assets/svg's";

import classes from "./BurgerMenu.module.scss";
import { COLORS } from "../../../assets/colors";

export default function BurgerMenu({
  isBurgerMenuOpen,
  setIsBurgerMenuOpen,
}: {
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: (val: boolean) => void;
}) {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const windowSize = useAppSelector((state) => state.windowSizeInfo.windowSize);

  const handleContactMeClicked = useCallback(() => {
    dispatch(setModalHeader(t("modals.contactModal.h")));
    dispatch(setModalContent(<ContactMeModalContent />));
    dispatch(setIsOpen(!isModalOpen));
  }, [dispatch]);

  return (
    <div className={`${classes.container} ${isBurgerMenuOpen && classes.open}`}>
      <div
        className={classes.content}
        style={{ height: windowSize.height - 120 + "px" }}
      >
        <div className={classes.navigationContainer}>
          <NavigationElement
            path="/"
            icon={<ProfileIcon width={25} height={25} />}
            name={t("header.navigation.about")}
            setIsOpen={setIsBurgerMenuOpen}
          />
          <NavigationElement
            path="/resume"
            icon={<ResumeIcon width={25} height={25} />}
            name={t("header.navigation.resume")}
            setIsOpen={setIsBurgerMenuOpen}
          />
          <NavigationElement
            path="/projects"
            icon={<FolderIcon width={25} height={25} />}
            name={t("header.navigation.projects")}
            setIsOpen={setIsBurgerMenuOpen}
          />
        </div>
        <div className={classes.contactMe}>
          <ContactMeIcon
            fill={COLORS.aqua}
            width={40}
            height={40}
            onClick={handleContactMeClicked}
          />
        </div>
      </div>
    </div>
  );
}
