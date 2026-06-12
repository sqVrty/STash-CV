import { ReactElement } from "react";

import { COLORS } from "@/assets/colors";
import classes from "./ServiceBlock.module.scss";

export default function ServiceBlock({
  icon,
  header,
  desc,
}: {
  icon: ReactElement;
  header: string;
  desc: string;
}) {
  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>{icon}</div>
      <h1 className={classes.header}>{header}</h1>
      <p style={{ color: COLORS.gray }}>{desc}</p>
    </div>
  );
}
