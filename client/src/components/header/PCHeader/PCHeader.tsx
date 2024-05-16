import { useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  setIsOpen,
  setModalHeader,
  setModalContent,
} from "../../../redux/features/modalSlice";

import NavigationElement from "./NavigationElement";
import IconContainer from "./IconContainer";
import LanguagesModalContent from "../../languagesModalContent/LanguagesModalContent";
import ContactMeModalContent from "../../contactMeModalContent/ContactMeModalContent";

import {
  ContactMeIcon,
  ProfileIcon,
  ResumeIcon,
  FolderIcon,
  GlobusIcon,
} from "../../../assets/svg's";

import classes from "./PCHeader.module.scss";
import { COLORS } from "../../../assets/colors";

export default function PCHeader() {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);

  const handleLanguageConnectMeClicked = useCallback(
    (index: number) => {
      if (index === 0) {
        dispatch(setModalHeader(t("modals.lngModal.h")));
        dispatch(setModalContent(<LanguagesModalContent />));
      } else if (index === 1) {
        dispatch(setModalHeader(t("modals.contactModal.h")));
        dispatch(setModalContent(<ContactMeModalContent />));
      }

      dispatch(setIsOpen(!isModalOpen));
    },
    [dispatch]
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
            onClick={handleLanguageConnectMeClicked}
            stroke={true}
          />
          <IconContainer
            icon={<ContactMeIcon width={40} height={40} />}
            index={1}
            onClick={handleLanguageConnectMeClicked}
            reversive={true}
          />
        </div>
      </div>
    </div>
  );
}
