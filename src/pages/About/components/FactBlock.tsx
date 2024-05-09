import { ReactElement } from "react";

import classes from "./FactBlock.module.scss";

export default function FactBlock({
  icon,
  text,
}: {
  icon: ReactElement;
  text: string;
}) {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>{icon}</div>
      <p className={classes.text}>{text}</p>
    </div>
  );
}
