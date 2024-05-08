import { useAppSelector } from "../../app/hooks";
import { TypeAnimation } from "react-type-animation";

import ProgressLine from "../../components/progressLine/ProgressLine";

import { COLORS } from "../../assets/colors";
import { MyPhoto } from "../../assets/img's";
import {
  SpeedometerIcon,
  TelegramIcon,
  WhatsAppIcon,
  GitHubIcon,
  InstagramIcon,
} from "../../assets/svg's";

import classes from "./Home.module.scss";

export default function Home() {
  const isMobileDevice = useAppSelector(
    (state) => state.deviceInfo.isMobileDevice
  );

  const skillsData = [
    {
      header: "web development",
      percentage: 91,
    },
    {
      header: "data base",
      percentage: 82,
    },
    {
      header: "seo optimisation",
      percentage: 90,
    },
    {
      header: "ui/ux design",
      percentage: 91,
    },
    {
      header: "graphic design",
      percentage: 90,
    },
  ];

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

  return isMobileDevice ? (
    <>
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

      <div
        className="mobileContent"
        style={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          marginTop: 20,
        }}
      >
        <div className="mobileContentContainer">
          <div className={classes.mobileContainer}>
            <div className={classes.textBlock}>
              <h1 className={classes.header}>resume</h1>
              <p className={classes.experience} style={{ color: COLORS.aqua }}>
                10 years in design
                <span className={classes.slash} style={{ color: COLORS.gray }}>
                  /
                </span>
                6 years in coding
                <span className={classes.slash} style={{ color: COLORS.gray }}>
                  /
                </span>
                master's degree
              </p>
              <p className={classes.description} style={{ color: COLORS.gray }}>
                Web Developer with 10 years of experience in designing and
                developing user interfaces, testing, debugging, and training
                staff within eCommerce technologies. Proven ability in
                optimizing web functionality that improve data retrieval and
                workflow efficiencies.
              </p>
              <div
                className={classes.line}
                style={{ backgroundColor: COLORS.gray }}
              />
            </div>
            <div className={classes.skillsBlock}>
              <div className={classes.headerContainer}>
                <SpeedometerIcon fill={COLORS.aqua} width={35} height={35} />
                <h1 className={classes.header}>skills</h1>
              </div>
              <div className={classes.progressLinesContainer}>
                {skillsData.map((data, index) => (
                  <ProgressLine
                    header={data.header}
                    percentage={data.percentage}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="content">
      <div className={classes.PCContainer}>
        <div className={classes.textBlock}>
          <h1 className={classes.header}>resume</h1>
          <p className={classes.experience} style={{ color: COLORS.aqua }}>
            10 years in design
            <span className={classes.slash} style={{ color: COLORS.gray }}>
              /
            </span>
            6 years in coding
            <span className={classes.slash} style={{ color: COLORS.gray }}>
              /
            </span>
            master's degree
          </p>
          <p className={classes.description} style={{ color: COLORS.gray }}>
            Web Developer with 10 years of experience in designing and
            developing user interfaces, testing, debugging, and training staff
            within eCommerce technologies. Proven ability in optimizing web
            functionality that improve data retrieval and workflow efficiencies.
          </p>
          <div
            className={classes.line}
            style={{ backgroundColor: COLORS.gray }}
          />
        </div>
        <div className={classes.skillsBlock}>
          <div className={classes.headerContainer}>
            <SpeedometerIcon fill={COLORS.aqua} width={35} height={35} />
            <h1 className={classes.header}>skills</h1>
          </div>
          <div className={classes.progressLinesContainer}>
            {skillsData.map((data, index) => (
              <ProgressLine header={data.header} percentage={data.percentage} />
            ))}
          </div>
          <div
            className={classes.line}
            style={{ backgroundColor: COLORS.darkgray }}
          />
        </div>
      </div>
    </div>
  );
}
