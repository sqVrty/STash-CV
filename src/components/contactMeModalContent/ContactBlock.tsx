import { ReactElement } from "react";

import { COLORS } from "../../assets/colors";
import classes from "./ContactBlock.module.scss";

export default function ContactBlock({
  socialName,
  icon,
  contact,
}: {
  socialName: string;
  icon: ReactElement;
  contact: string;
}) {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        {icon}
        <p className={classes.socialName} style={{ color: COLORS.gray }}>
          {socialName}
        </p>
      </div>
      <p className={classes.contact}>{contact}</p>
    </div>
  );
}
