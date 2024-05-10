import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";

import {
  ProfileIcon,
  SpeedometerIcon,
  GlassesIcon,
  PhoneIcon,
} from "../../../assets/svg's";

import classes from "./BurgerMenu.module.scss";
import { COLORS } from "./../../../assets/colors";

type IconMapType = {
  [key: string]: string;
};

export default function BurgerMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  const windowSize = useAppSelector((state) => state.windowSizeInfo.windowSize);

  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState<string>("");

  useEffect(() => {
    const { pathname } = location;

    const iconMap: IconMapType = {
      "/": "profile",
      "/skills": "skills",
      "/experience": "experience",
    };

    setActiveIcon(iconMap[pathname]);
  }, [location]);

  const handleLinkClicked = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${classes.container} ${isOpen && classes.open}`}>
      <div
        className={classes.content}
        style={{ height: windowSize.height - 120 + "px" }}
      >
        <div className={classes.navigationContainer}>
          <Link
            to="/"
            className={classes.iconContainer}
            onClick={handleLinkClicked}
          >
            <ProfileIcon
              className={`${classes.icon} ${
                activeIcon === "profile" && classes.activeIcon
              }`}
            />
            <p>Профиль</p>
          </Link>
          <Link
            to="/skills"
            className={classes.iconContainer}
            onClick={handleLinkClicked}
          >
            <SpeedometerIcon
              className={`${classes.icon} ${
                activeIcon === "skills" && classes.activeIcon
              }`}
            />
            <p>Навыки</p>
          </Link>
          <Link
            to="/experience"
            className={classes.iconContainer}
            onClick={handleLinkClicked}
          >
            <GlassesIcon
              className={`${classes.icon} ${
                activeIcon === "experience" && classes.activeIcon
              }`}
            />
            <p>Опыт работы</p>
          </Link>
        </div>
        <div className={classes.contactMe}>
          <PhoneIcon fill={COLORS.aqua} width={40} height={40} />
        </div>
      </div>
    </div>
  );
}
