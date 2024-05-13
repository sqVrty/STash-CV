import { TypeAnimation } from "react-type-animation";

import { COLORS } from "../../assets/colors";
import { MyPhoto } from "../../assets/img's";
import {
  TelegramIcon,
  WhatsAppIcon,
  GitHubIcon,
  InstagramIcon,
} from "../../assets/svg's";

import classes from "./PhotoContainer.module.scss";

export default function PhotoContainer() {
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
        <h1 className={classes.name}>Ren Nolan</h1>
        <TypeAnimation
          sequence={[
            "Developer",
            3000,
            "Application Developer",
            3000,
            "UI/UX Designer",
            3000,
          ]}
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
