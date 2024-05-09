import { TypeAnimation } from "react-type-animation";

import { COLORS } from "../../assets/colors";
import { MyPhoto } from "../../assets/img's";
import {
  TelegramIcon,
  WhatsAppIcon,
  GitHubIcon,
  InstagramIcon,
} from "../../assets/svg's";

import classes from "./PhotoMobileContainer.module.scss";

export default function PhotoMobileContainer() {
  const handleSocialClick = (social: string) => {
    switch (social) {
      case "telegram":
        window.open("https://t.me/sqvrty", "_blank");
        break;
      case "whatsapp":
        window.open("https://wa.me/375291628018", "_blank");
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
    <div className="mobileContent">
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
              fill={COLORS.lightgray}
              width={25}
              height={25}
              onClick={() => handleSocialClick("telegram")}
            />
            <WhatsAppIcon
              fill={COLORS.lightgray}
              width={25}
              height={25}
              onClick={() => handleSocialClick("whatsapp")}
            />
            <GitHubIcon
              fill={COLORS.lightgray}
              width={25}
              height={25}
              onClick={() => handleSocialClick("github")}
            />
            <InstagramIcon
              fill={COLORS.lightgray}
              width={25}
              height={25}
              onClick={() => handleSocialClick("instagram")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
