import { ReactElement } from "react";

import { COLORS } from "../../../assets/colors";

import classes from "./LineSkillBlock.module.scss";

export default function LineSkillBlock({
  icon,
  name,
  percentage,
  circled,
}: {
  icon: ReactElement;
  name: string;
  percentage: number;
  circled?: boolean;
}) {
  const circlesArray = [];

  for (let i = 0; i < 10; i++) {
    circlesArray.push(
      <div
        key={i}
        className={classes.circle}
        style={
          i < Math.floor(percentage / 10)
            ? { backgroundColor: COLORS.aqua }
            : i - (percentage / 10 - 1) > 0.1 && i - (percentage / 10 - 1) < 1
            ? {
                background: `linear-gradient(to left, ${COLORS.darkgray} 50%, ${COLORS.aqua}  50%)`,
              }
            : {}
        }
      />
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.rightContainer}>
        <p className={classes.name} style={{ color: COLORS.lightgray }}>
          {name}
        </p>
        <div className={classes.lineContainer}>
          {circled ? (
            <div className={classes.circlesContainer}>{circlesArray}</div>
          ) : (
            <div className={classes.line}>
              <div
                className={classes.activeLine}
                style={{
                  width: percentage + "%",
                  backgroundColor: COLORS.aqua,
                }}
              />
            </div>
          )}
          <p className={classes.percentage} style={{ color: COLORS.lightgray }}>
            {percentage}%
          </p>
        </div>
      </div>
    </div>
  );
}
