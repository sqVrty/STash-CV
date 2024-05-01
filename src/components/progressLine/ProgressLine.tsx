import { COLORS } from "../../assets/colors";

import classes from "./ProgressLine.module.scss";

export default function ProgressLine({
  header,
  percentage,
}: {
  header: string;
  percentage: number;
}) {
  return (
    <div className={classes.container}>
      <div className={classes.headerAndPercentageContainer}>
        <p className={classes.header}>{header}</p>
        <p className={classes.percentage} style={{ color: COLORS.aqua }}>
          {percentage}%
        </p>
      </div>
      <div className={classes.progressLineContainer}>
        <div
          className={classes.allProgress}
          style={{ backgroundColor: COLORS.darkgray }}
        />
        <div
          className={classes.currentProgress}
          style={{
            width: `${percentage}%`,
            backgroundColor: COLORS.aqua,
          }}
        />
      </div>
    </div>
  );
}
