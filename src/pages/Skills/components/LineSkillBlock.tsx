import { useAppSelector } from "../../../app/hooks";
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
  const isMobileDevice = useAppSelector(
    (state) => state.deviceInfo.isMobileDevice
  );
  const windowSize = useAppSelector((state) => state.windowSizeInfo.windowSize);

  const circlesArray = [];

  const circlesAmount = windowSize.width < 1400 && !isMobileDevice ? 5 : 10;

  for (let i = 0; i < circlesAmount; i++) {
    circlesArray.push(
      <div
        key={i}
        className={classes.circle}
        style={
          i < Math.floor(percentage / (100 / circlesAmount))
            ? { backgroundColor: COLORS.aqua }
            : i - (percentage / (100 / circlesAmount) - 1) > 0.1 &&
              i - (percentage / (100 / circlesAmount) - 1) < 1
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
