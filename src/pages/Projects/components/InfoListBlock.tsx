import { COLORS } from "../../../../public/assets/colors";

import classes from "./InfoListBlock.module.scss";

export default function InfoListBlock({
  fieldName,
  answer,
  isLastElement,
}: {
  fieldName: string;
  answer: string;
  isLastElement?: boolean;
}) {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <p
          className={classes.fieldName}
          style={{ backgroundColor: COLORS.darkgray }}
        >
          {fieldName}:
        </p>
        <p className={classes.answer} style={{ color: COLORS.lightgray }}>
          {answer}
        </p>
      </div>
      {!isLastElement && (
        <div
          className={classes.line}
          style={{ backgroundColor: COLORS.gray }}
        />
      )}
    </div>
  );
}
