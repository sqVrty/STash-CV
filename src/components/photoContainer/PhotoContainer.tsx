import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

import { COLORS } from "../../../public/assets/colors";
import { MyPhoto } from "../../../public/assets/img's";
import {
  TelegramIcon,
  WhatsAppIcon,
  GitHubIcon,
  InstagramIcon,
} from "../../../public/assets/svg's";

import classes from "./PhotoContainer.module.scss";

export default function PhotoContainer() {
  const { t, i18n } = useTranslation();
  const [animationKey, setAnimationKey] = useState<number>(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [i18n.language]);

  const handleSocialClick = (social: string) => {
    switch (social) {
      case "telegram":
        window.open("https://t.me/sqvrty", "_blank");
        break;
      case "whatsapp":
        window.open("https://wa.me/79890491701", "_blank");
        break;
      case "github":
        window.open("https://github.com/sqVrty", "_blank");
        break;
      case "instagram":
        window.open("https://instagram.com/sqvrty", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.photoContainer}>
      <img src={MyPhoto} className={classes.photo} />
      <div className={classes.infoContainer}>
        <h1 className={classes.name}>{t("photoContainer.name")}</h1>
        <TypeAnimation
          key={animationKey}
          sequence={(
            t("photoContainer.typesOfWork", {
              returnObjects: true,
            }) as string[]
          ).reduce((acc: any, currentValue: string, index: number) => {
            acc.push(currentValue);
            acc.push(3000);
            return acc;
          }, [])}
          className={classes.career}
          style={{ color: COLORS.aqua }}
          repeat={Infinity}
        />
        <div className={classes.socialsContainer}>
          <TelegramIcon
            width={25}
            height={25}
            className={classes.icon}
            onClick={() => handleSocialClick("telegram")}
          />
          <WhatsAppIcon
            width={25}
            height={25}
            className={classes.icon}
            onClick={() => handleSocialClick("whatsapp")}
          />
          <GitHubIcon
            width={25}
            height={25}
            className={classes.icon}
            onClick={() => handleSocialClick("github")}
          />
          <InstagramIcon
            width={25}
            height={25}
            className={classes.icon}
            onClick={() => handleSocialClick("instagram")}
          />
        </div>
      </div>
    </div>
  );
}
