import React, { ReactElement, useState } from "react";

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
  const [hoverActiveBlock, setHoverActiveBlock] = useState<string | null>(null);

  const isActiveHover = hoverActiveBlock === socialName;

  const handleMouseEnter = (socialName: string) => {
    setHoverActiveBlock(socialName);
  };

  const handleMouseLeave = () => {
    setHoverActiveBlock(null);
  };

  const handleSocialClick = (socialName: string) => {
    switch (socialName) {
      case "Telegram":
        window.open("https://t.me/sqvrty", "_blank");
        break;
      case "WhatsApp":
        window.open("https://wa.me/79890491701", "_blank");
        break;
      case "Phone":
      case "Телефон":
        window.open("tel:+79890491701");
        break;
      case "Email":
      case "Почта":
        window.open(`mailto:sergeu-tash@yandex.ru?subject=Feedback`);
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={classes.container}
      onMouseEnter={() => handleMouseEnter(socialName)}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleSocialClick(socialName)}
    >
      <div className={classes.header}>
        {React.cloneElement(icon, {
          className: classes.icon,
          fill: isActiveHover ? COLORS.lightgray : COLORS.gray,
        })}
        <p
          className={classes.socialName}
          style={{ color: isActiveHover ? COLORS.lightgray : COLORS.gray }}
        >
          {socialName}
        </p>
      </div>
      <p className={classes.contact}>{contact}</p>
    </div>
  );
}
