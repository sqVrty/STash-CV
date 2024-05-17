import { ReactElement } from "react";

import { COLORS } from "../../assets/colors";

import classes from "./TextWithIcon.module.scss";

export default function TextWithIcon({
  icon,
  text,
}: {
  icon: ReactElement;
  text: string;
}) {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        {icon}
        <p className={classes.text}>{text}</p>
      </div>
      <div className={classes.line} style={{ backgroundColor: COLORS.gray }} />
    </div>
  );
}
