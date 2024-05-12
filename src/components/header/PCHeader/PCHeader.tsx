import { useEffect } from "react";
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

  const handleLanguageFeedbackClicked = (index: number) => {
    dispatch(setIsOpen(!isModalOpen));
    // console.log(123);
  };

  useEffect(() => {
    dispatch(setIsOpen(!isModalOpen));
  }, [dispatch]);

  console.log(isModalOpen);

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
        <div className={classes.languageFeedbackContainer}>
          <IconContainer
            icon={<GlobusIcon width={25} height={25} />}
            index={0}
            onClick={handleLanguageFeedbackClicked}
            stroke={true}
          />
          <IconContainer
            icon={<PhoneIcon width={40} height={40} />}
            index={1}
            onClick={handleLanguageFeedbackClicked}
            reversive={true}
          />
        </div>
      </div>
    </div>
  );
}
