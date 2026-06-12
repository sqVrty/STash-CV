import { ReactElement } from "react";

import { useViewport } from "@/providers/ViewportProvider";

import { COLORS } from "@/assets/colors";

import classes from "./LineSkillBlock.module.scss";

export default function LineSkillBlock({
  icon,
  name,
  percentage,
  circled,
  desc,
}: {
  icon: ReactElement;
  name: string;
  percentage: number;
  circled?: boolean;
  desc?: string[];
}) {
  const { isMobile, width } = useViewport();

  const circlesArray = [];

  const circlesAmount = width < 1400 && !isMobile ? 5 : 10;

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
        {desc && (
          <div className={classes.descContainer}>
            {desc.map((item, index) => (
              <p className={classes.descItem} key={index}>
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
