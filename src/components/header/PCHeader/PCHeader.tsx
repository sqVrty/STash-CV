import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  LogoIcon,
  ProfileIcon,
  SpeedometerIcon,
  GlassesIcon,
  PhoneIcon,
} from "../../../assets/svg's";

import classes from "./PCHeader.module.scss";
import { COLORS } from "./../../../assets/colors";

type IconMapType = {
  [key: string]: string;
};

export default function PCHeader() {
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

  return (
    <div className="header">
      <div className={classes.container}>
        <p className={classes.logo} style={{ color: COLORS.aqua }}>
          ST
        </p>
        <div className={classes.navigationContainer}>
          <Link to="/" className={classes.iconContainer}>
            <ProfileIcon
              className={`${classes.icon} ${
                activeIcon === "profile" && classes.activeIcon
              }`}
            />
          </Link>
          <Link to="/skills" className={classes.iconContainer}>
            <SpeedometerIcon
              className={`${classes.icon} ${
                activeIcon === "skills" && classes.activeIcon
              }`}
            />
          </Link>
          <Link to="/experience" className={classes.iconContainer}>
            <GlassesIcon
              className={`${classes.icon} ${
                activeIcon === "experience" && classes.activeIcon
              }`}
            />
          </Link>
        </div>
        <PhoneIcon fill={COLORS.aqua} width={40} height={40} />
      </div>
    </div>
  );
}
