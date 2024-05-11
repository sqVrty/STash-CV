import NavigationElement from "./NavigationElement";

import {
  PhoneIcon,
  ProfileIcon,
  ResumeIcon,
  FolderIcon,
} from "../../../assets/svg's";

import classes from "./PCHeader.module.scss";
import { COLORS } from "./../../../assets/colors";

export default function PCHeader() {
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
        <PhoneIcon fill={COLORS.aqua} width={40} height={40} />
      </div>
    </div>
  );
}
