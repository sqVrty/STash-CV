import { ReactElement } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { COLORS } from "../../../../public/assets/colors";

import classes from "./CircleSkillBlock.module.scss";

export default function CircleSkillBlock({
  icon,
  percentage,
  name,
}: {
  icon: ReactElement;
  percentage: number;
  name: string;
}) {
  return (
    <div className={classes.container}>
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={4}
        background
        styles={buildStyles({
          pathColor: COLORS.aqua,
          trailColor: COLORS.darkgray,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        })}
      >
        {icon}
        <p className={classes.percentages}>{percentage}%</p>
      </CircularProgressbarWithChildren>
      <p className={classes.name}>{name}</p>
    </div>
  );
}
