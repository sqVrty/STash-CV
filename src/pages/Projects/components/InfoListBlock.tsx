import { COLORS } from "../../../assets/colors";

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
  // Проверяем, является ли answer ссылкой (содержит домен .com, .ru, .website и т.д.)
  const isLink = /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/.test(answer);

  const getFullUrl = (url: string) =>
    url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `https://${url}`;

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <p
          className={classes.fieldName}
          style={{ backgroundColor: COLORS.darkgray }}
        >
          {fieldName}:
        </p>
        {isLink ? (
          <a
            href={getFullUrl(answer)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${classes.answer} ${classes.answerLink}`}
          >
            {answer}
          </a>
        ) : (
          <p className={classes.answer} style={{ color: COLORS.lightgray }}>
            {answer}
          </p>
        )}
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
