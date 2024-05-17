import React, { useState, useEffect, MouseEvent, ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import "animate.css";

import { COLORS } from "../../../assets/colors";

import classes from "./NavigationElement.module.scss";

export default function NavigationElement({
  path,
  icon,
  hintName,
}: {
  path: string;
  icon: ReactElement;
  hintName: string;
}) {
  const location = useLocation();
  const { pathname } = location;
  const [hoverActiveIcon, setHoverActiveIcon] = useState<string | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);

  const handleMouseEnter = (iconName: string) => {
    setHoverActiveIcon(iconName);
    setShowHint(true);
  };

  const handleMouseLeave = () => {
    setHoverActiveIcon(null);
    setTimeout(() => setShowHint(false), 350);
  };

  return (
    <Link
      to={path}
      className={classes.iconContainer}
      onMouseEnter={(e: MouseEvent) => handleMouseEnter(hintName)}
      onMouseLeave={handleMouseLeave}
    >
      {React.cloneElement(icon, {
        className: classes.icon,
        fill:
          pathname === path || hoverActiveIcon === hintName
            ? COLORS.aqua
            : COLORS.lightgray,
      })}
      <div
        className={`${classes.nameHintContainer} ${
          hoverActiveIcon === hintName
            ? "animate__animated animate__fadeIn animate__delay-0.4s"
            : "animate__animated animate__zoomOut animate__delay-0.3s"
        }`}
        style={{ display: showHint ? "block" : "none" }}
      >
        <p className={classes.name}>{hintName}</p>
      </div>
    </Link>
  );
}
