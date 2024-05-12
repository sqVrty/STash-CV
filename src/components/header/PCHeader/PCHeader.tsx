import { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setIsOpen } from "../../../redux/features/modalSlice";

import NavigationElement from "./NavigationElement";
import IconContainer from "./IconContainer";

import {
  PhoneIcon,
  ProfileIcon,
  ResumeIcon,
  FolderIcon,
  GlobusIcon,
} from "../../../assets/svg's";

import classes from "./PCHeader.module.scss";
import { COLORS } from "./../../../assets/colors";

export default function PCHeader() {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);

  const handleLanguageConnectMeClicked = useCallback(
    (index: number) => {
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
            hintName="About"
          />
          <NavigationElement
            path="/resume"
            icon={<ResumeIcon width={25} height={25} />}
            hintName="Resume"
          />
          <NavigationElement
            path="/projects"
            icon={<FolderIcon width={25} height={25} />}
            hintName="Projects"
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
            icon={<PhoneIcon width={40} height={40} />}
            index={1}
            onClick={handleLanguageConnectMeClicked}
            reversive={true}
          />
        </div>
      </div>
    </div>
  );
}
