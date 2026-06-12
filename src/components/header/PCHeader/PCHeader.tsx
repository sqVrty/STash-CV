import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { useModal } from "@/providers/ModalProvider";

import NavigationElement from "./NavigationElement";
import IconContainer from "./IconContainer";
import LanguagesModalContent from "@/components/languagesModalContent/LanguagesModalContent";
import ContactMeModalContent from "@/components/contactMeModalContent/ContactMeModalContent";

import {
  ContactMeIcon,
  ProfileIcon,
  ResumeIcon,
  FolderIcon,
  GlobusIcon,
} from "@/assets/icons";
import { COLORS } from "@/assets/colors";

import classes from "./PCHeader.module.scss";

export default function PCHeader() {
  const { t } = useTranslation();
  const { openModal } = useModal();

  const handleIconClick = useCallback(
    (index: number) => {
      if (index === 0) {
        openModal(t("modals.lngModal.h"), <LanguagesModalContent />);
      } else if (index === 1) {
        openModal(t("modals.contactModal.h"), <ContactMeModalContent />);
      }
    },
    [openModal, t]
  );

  return (
    <div className="PCHeader">
      <div className={classes.container}>
        <h1 className={classes.logo} style={{ color: COLORS.aqua }}>
          ST
        </h1>
        <div className={classes.navigationContainer}>
          <NavigationElement
            path="/"
            icon={<ProfileIcon width={25} height={25} />}
            hintName={t("header.navigation.about")}
          />
          <NavigationElement
            path="/resume"
            icon={<ResumeIcon width={25} height={25} />}
            hintName={t("header.navigation.resume")}
          />
          <NavigationElement
            path="/projects"
            icon={<FolderIcon width={25} height={25} />}
            hintName={t("header.navigation.projects")}
          />
        </div>
        <div className={classes.languageConnectMeContainer}>
          <IconContainer
            icon={<GlobusIcon width={25} height={25} />}
            index={0}
            onClick={handleIconClick}
            stroke={true}
          />
          <IconContainer
            icon={<ContactMeIcon width={40} height={40} />}
            index={1}
            onClick={handleIconClick}
            reversive={true}
          />
        </div>
      </div>
    </div>
  );
}
