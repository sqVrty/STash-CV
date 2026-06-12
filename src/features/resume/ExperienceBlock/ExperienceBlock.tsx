import { COLORS } from "@/assets/colors";

import classes from "./ExperienceBlock.module.scss";

export default function ExperienceBlock({
  period,
  isPresent,
  post,
  cpName,
  logo,
  desc,
}: {
  period: string;
  isPresent?: boolean;
  post: string;
  cpName: string;
  logo: string;
  desc: string;
}) {
  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <div className={classes.textContainer}>
          <div
            className={`${classes.periodContainer} ${
              isPresent && classes.present
            }`}
          >
            {period}
          </div>
          <h1 className={classes.post}>{post}</h1>
          <p className={classes.cpName} style={{ color: COLORS.gray }}>
            {cpName}
          </p>
        </div>
        <img className={classes.logo} src={logo} />
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
