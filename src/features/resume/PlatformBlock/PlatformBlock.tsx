import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { COLORS } from "@/assets/colors";

import classes from "./PlatformBlock.module.scss";

export default function PlatformBlock({
  percentage,
  name,
}: {
  percentage: number;
  name: string;
}) {
  return (
    <div className={classes.container}>
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={4}
        styles={buildStyles({
          pathColor: COLORS.aqua,
          trailColor: COLORS.darkgray,
        })}
      >
        <p className={classes.percentages}>{percentage}%</p>
      </CircularProgressbarWithChildren>
      <p className={classes.name}>{name}</p>
    </div>
  );
}
