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
          {/* <Link
            to="/"
            className={classes.iconContainer}
            onMouseEnter={(e: MouseEvent) => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <ProfileIcon
              className={`${classes.icon} ${
                hoverActiveIcon ||
                (activeIcon === "about" && classes.activeIcon)
              }`}
            />
            <div className={classes.nameHintContainer}>
              <p className={classes.name}>About</p>
            </div>
          </Link> */}
          {/* <Link
            to="/resume"
            className={classes.iconContainer}
            onMouseEnter={(e: MouseEvent) => handleMouseEnter("resume")}
            onMouseLeave={handleMouseLeave}
          >
            <ResumeIcon
              className={`${classes.icon} ${
                hoverActiveIcon ||
                (activeIcon === "resume" && classes.activeIcon)
              }`}
            />
          </Link>
          <Link
            to="/projects"
            className={classes.iconContainer}
            onMouseEnter={(e: MouseEvent) => handleMouseEnter("projects")}
            onMouseLeave={handleMouseLeave}
          >
            <FolderIcon
              className={`${classes.icon} ${
                hoverActiveIcon ||
                (activeIcon === "projects" && classes.activeIcon)
              }`}
            />
          </Link> */}
        </div>
        <PhoneIcon fill={COLORS.aqua} width={40} height={40} />
      </div>
    </div>
  );
}
