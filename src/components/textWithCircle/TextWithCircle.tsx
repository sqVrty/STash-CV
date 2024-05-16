import { COLORS } from "../../../public/assets/colors";

import classes from "./TextWithCircle.module.scss";

export default function TextWithCircle({
  text,
  isFirst,
}: {
  text: string;
  isFirst?: boolean;
}) {
  return (
    <div className={`${classes.container} ${isFirst && classes.first}`}>
      <div className={classes.textContainer}>
        <p className={classes.text}>{text}</p>
        <div className={classes.circle} />
      </div>
      <div className={classes.line} style={{ backgroundColor: COLORS.gray }} />
    </div>
  );
}
