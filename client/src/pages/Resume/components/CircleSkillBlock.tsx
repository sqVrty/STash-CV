import { ReactElement } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { COLORS } from "../../../assets/colors";

import classes from "./CircleSkillBlock.module.scss";

export default function CircleSkillBlock({
  icon,
  percentage,
  name,
  desc,
}: {
  icon: ReactElement;
  percentage: number;
  name: string;
  desc?: string[];
}) {
  return (
    <div className={classes.container}>
      <div className={classes.circleProgressWrapper}>
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
      </div>
      <div className={classes.textContainer}>
        <p className={classes.name}>{name}</p>
        {desc &&
          desc.map((item, index) => (
            <p
              className={`${classes.descItem} ${
                index === 0 ? classes.firstDescItem : ""
              }`}
            >
              {item}
            </p>
          ))}
      </div>
    </div>
  );
}
