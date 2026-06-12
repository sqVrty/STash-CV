import { COLORS } from "@/assets/colors";

import classes from "./EducationBlock.module.scss";

export default function EducationBlock({
  period,
  isPresent,
  name,
  city,
  desc,
}: {
  period: string;
  isPresent?: boolean;
  name: string;
  city: string;
  desc: string;
}) {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div
          className={`${classes.periodContainer} ${
            isPresent && classes.present
          }`}
        >
          {period}
        </div>
        <h1 className={classes.post}>{name}</h1>
        <p className={classes.cpName} style={{ color: COLORS.gray }}>
          {city}
        </p>
      </div>
      <p
        className={classes.description}
        style={{ color: COLORS.gray }}
        dangerouslySetInnerHTML={{
          __html: desc,
        }}
      />
    </div>
  );
}
