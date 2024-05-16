import React, { ReactElement, useState, MouseEvent } from "react";
import { COLORS } from "../../../assets/colors";
import classes from "./IconContainer.module.scss";

export default function IconContainer({
  icon,
  index,
  onClick,
  reversive,
  stroke,
}: {
  icon: ReactElement;
  index: number;
  onClick?: (index: number) => void;
  reversive?: boolean;
  stroke?: boolean;
}) {
  const [hoverActiveIcon, setHoverActiveIcon] = useState<number | null>(null);

  const handleMouseEnter = () => {
    setHoverActiveIcon(index);
  };

  const handleMouseLeave = () => {
    setHoverActiveIcon(null);
  };

  const color =
    hoverActiveIcon === index
      ? reversive
        ? COLORS.lightgray
        : COLORS.aqua
      : reversive
      ? COLORS.aqua
      : COLORS.lightgray;

  return (
    <div
      className={classes.iconContainer}
      onClick={onClick && (() => onClick(index))}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {React.cloneElement(icon, {
        className: classes.icon,
        fill: !stroke ? color : "none",
        stroke: stroke ? color : "none",
      })}
    </div>
  );
}
