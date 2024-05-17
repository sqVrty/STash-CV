import React, { useState, useEffect, MouseEvent, ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import "animate.css";

import { COLORS } from "../../../assets/colors";

import classes from "./NavigationElement.module.scss";

export default function NavigationElement({
  path,
  icon,
  name,
  setIsOpen,
}: {
  path: string;
  icon: ReactElement;
  name: string;
  setIsOpen: (val: boolean) => void;
}) {
  const location = useLocation();
  const { pathname } = location;

  const handleLinkClicked = () => {
    setIsOpen(false);
  };

  return (
    <Link
      to={path}
      className={classes.iconContainer}
      onClick={handleLinkClicked}
    >
      {React.cloneElement(icon, {
        className: classes.icon,
        fill: pathname === path ? COLORS.aqua : COLORS.lightgray,
      })}
      <p className={classes.name}>{name}</p>
    </Link>
  );
}
