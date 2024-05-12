import { useAppSelector } from "../../../app/hooks";

import NavigationElement from "./NavigationElement";

import {
  ProfileIcon,
  ResumeIcon,
  FolderIcon,
  ContactMeIcon,
} from "../../../assets/svg's";

import classes from "./BurgerMenu.module.scss";
import { COLORS } from "./../../../assets/colors";

export default function BurgerMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  const windowSize = useAppSelector((state) => state.windowSizeInfo.windowSize);

  return (
    <div className={`${classes.container} ${isOpen && classes.open}`}>
      <div
        className={classes.content}
        style={{ height: windowSize.height - 120 + "px" }}
      >
        <div className={classes.navigationContainer}>
          <NavigationElement
            path="/"
            icon={<ProfileIcon width={25} height={25} />}
            name="About"
            setIsOpen={setIsOpen}
          />
          <NavigationElement
            path="/resume"
            icon={<ResumeIcon width={25} height={25} />}
            name="Resume"
            setIsOpen={setIsOpen}
          />
          <NavigationElement
            path="/projects"
            icon={<FolderIcon width={25} height={25} />}
            name="Projects"
            setIsOpen={setIsOpen}
          />
        </div>
        <div className={classes.contactMe}>
          <ContactMeIcon fill={COLORS.aqua} width={40} height={40} />
        </div>
      </div>
    </div>
  );
}
