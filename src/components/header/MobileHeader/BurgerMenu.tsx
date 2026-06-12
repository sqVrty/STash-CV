import { useCallback, type Dispatch, type SetStateAction } from "react";
import { useTranslation } from "react-i18next";

import { useModal } from "../../../providers/ModalProvider";
import { useViewport } from "../../../providers/ViewportProvider";

import NavigationElement from "./NavigationElement";
import ContactMeModalContent from "../../contactMeModalContent/ContactMeModalContent";

import {
  ProfileIcon,
  ResumeIcon,
  FolderIcon,
  ContactMeIcon,
} from "../../../assets/icons";
import { COLORS } from "../../../assets/colors";

import classes from "./BurgerMenu.module.scss";

export default function BurgerMenu({
  isBurgerMenuOpen,
  setIsBurgerMenuOpen,
}: {
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { t } = useTranslation();
  const { openModal } = useModal();
  const { height } = useViewport();

  const handleContactClick = useCallback(() => {
    openModal(t("modals.contactModal.h"), <ContactMeModalContent />);
  }, [openModal, t]);

  return (
    <div
      className={`${classes.container} ${isBurgerMenuOpen ? classes.open : ""}`}
    >
      <div className={classes.content} style={{ height: `${height - 120}px` }}>
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
            onClick={handleContactClick}
          />
        </div>
      </div>
    </div>
  );
}
