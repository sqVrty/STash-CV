import React, { useState, useEffect, MouseEvent, ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

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

  const handleMouseEnter = (iconName: string) => {
    setHoverActiveIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoverActiveIcon(null);
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
      <div className={classes.nameHintContainer}>
        <p className={classes.name}>{hintName}</p>
      </div>
    </Link>
  );
}
