import { useTranslation } from "react-i18next";
import "animate.css";
import { useAppSelector } from "../../app/hooks";

import TextWithCircle from "../../components/textWithCircle/TextWithCircle";
import TextWithIcon from "../../components/textWithIcon/TextWithIcon";
import ExperienceBlock from "./components/ExperienceBlock";
import EducationBlock from "./components/EducationBlock";
import CircleSkillBlock from "./components/CircleSkillBlock";
import LineSkillBlock from "./components/LineSkillBlock";
import PlatformBlock from "./components/PlatformBlock";
import KnowledgeBlock from "./components/KnowledgeBlock";

import { COLORS } from "../../assets/colors";
import {
  SuitcaseIcon,
  EducationIcon,
  KworkIcon,
  JavascriptIcon,
  ReduxIcon,
  HTMLIcon,
  DockerIcon,
  CodingIcon,
  LanguagesIcon,
  ReactColoredIcon,
  TypeScriptIcon,
  ScssIcon,
  UKIcon,
  RussiaIcon,
  BelarusIcon,
  GearsIcon,
  ListIcon,
} from "../../assets/svg's";
import {
  BMSTULogo,
  InginiriumLogo,
  EmotionalEggheadLogo,
} from "../../assets/img's";

import classes from "./Resume.module.scss";

export default function Resume() {
  const { t, i18n } = useTranslation();
  const isMobileDevice = useAppSelector(
    (state) => state.deviceInfo.isMobileDevice
  );

  return (
    <div
      className={
        isMobileDevice
          ? "mobileContent"
          : "content" +
            " animate__animated animate__slideInLeft animate__delay-0.7s"
      }
    >
      <div
        className={
          isMobileDevice ? "mobileContentContainer" : "PCContentContainer"
        }
      >
        <TextWithCircle text={t("resumePage.h")} isFirst={true} />
        <div className={classes.textWithIconsContainer}>
          <div className={classes.textWithIconContainer1}>
            <TextWithIcon
              icon={<SuitcaseIcon fill={COLORS.aqua} width={35} height={35} />}
              text={t("resumePage.expBlock.h")}
            />
            <div className={classes.expAndEduBlock}>
              <ExperienceBlock
                period={t("resumePage.expBlock.block1.period")}
                post={t("resumePage.expBlock.block1.post")}
                cpName={t("resumePage.expBlock.block1.cpName")}
                logo={EmotionalEggheadLogo}
                desc={t("resumePage.expBlock.block1.desc")}
              />
              <div className={classes.dot} />
            </div>
            <div className={classes.expAndEduBlock}>
              <ExperienceBlock
                period={t("resumePage.expBlock.block2.period")}
                post={t("resumePage.expBlock.block2.post")}
                cpName={t("resumePage.expBlock.block2.cpName")}
                logo={BMSTULogo}
                desc={t("resumePage.expBlock.block2.desc")}
              />
              <div className={`${classes.dot}`} />
            </div>
            <div className={classes.expAndEduBlock}>
              <ExperienceBlock
                period={t("resumePage.expBlock.block3.period")}
                post={t("resumePage.expBlock.block3.post")}
                cpName={t("resumePage.expBlock.block3.cpName")}
                logo={InginiriumLogo}
                desc={t("resumePage.expBlock.block3.desc")}
              />
              <div className={`${classes.dot}`} />
            </div>
            <div className={classes.expAndEduBlock}>
              <ExperienceBlock
                period={t("resumePage.expBlock.block4.period")}
                post={t("resumePage.expBlock.block4.post")}
                cpName={t("resumePage.expBlock.block4.cpName")}
                logo={KworkIcon}
                desc={t("resumePage.expBlock.block4.desc")}
              />
              <div className={`${classes.dot}`} />
            </div>
          </div>
          <div className={classes.textWithIconContainer2}>
            <TextWithIcon
              icon={<EducationIcon fill={COLORS.aqua} width={35} height={35} />}
              text={t("resumePage.eduBlock.h")}
            />
            <div className={classes.expAndEduBlock}>
              <EducationBlock
                period={t("resumePage.eduBlock.block1.period")}
                isPresent={true}
                name={t("resumePage.eduBlock.block1.name")}
                city={t("resumePage.eduBlock.block1.city")}
                desc={t("resumePage.eduBlock.block1.desc")}
              />
              <div className={`${classes.dot} ${classes.present}`} />
            </div>
            <div className={classes.expAndEduBlock}>
              <EducationBlock
                period={t("resumePage.eduBlock.block2.period")}
                name={t("resumePage.eduBlock.block2.name")}
                city={t("resumePage.eduBlock.block2.city")}
                desc={t("resumePage.eduBlock.block2.desc")}
              />
              <div className={`${classes.dot}`} />
            </div>
          </div>
        </div>

        <TextWithCircle text={t("resumePage.progSkillsBlock.h")} />
        <div
          className={`${classes.progSkillsContainer} ${
            isMobileDevice && classes.mobile
          }`}
        >
          <CircleSkillBlock
            icon={<JavascriptIcon width={40} height={40} />}
            percentage={90}
            name="JavaScript"
          />
          <CircleSkillBlock
            icon={<HTMLIcon width={40} height={40} />}
            percentage={80}
            name="HTML 5"
          />
          <CircleSkillBlock
            icon={<ReduxIcon width={40} height={40} />}
            percentage={75}
            name="Redux"
          />
          <CircleSkillBlock
            icon={<DockerIcon width={40} height={40} />}
            percentage={90}
            name="Docker"
          />
        </div>

        <TextWithCircle text={t("resumePage.generalSkillsBlock.h")} />
        <div className={classes.textWithIconsContainer}>
          <div className={classes.textWithIconContainer1}>
            <TextWithIcon
              icon={<CodingIcon fill={COLORS.aqua} width={35} height={35} />}
              text={t("resumePage.generalSkillsBlock.codingH")}
            />
            <div className={classes.lineSkillBlocksContainer}>
              <LineSkillBlock
                icon={<ReactColoredIcon width={35} height={35} />}
                name="React"
                percentage={82}
              />
              <LineSkillBlock
                icon={<ReactColoredIcon width={35} height={35} />}
                name="React Native"
                percentage={69}
              />
              <LineSkillBlock
                icon={<TypeScriptIcon width={35} height={35} />}
                name="TypeScript"
                percentage={90}
              />
              <LineSkillBlock
                icon={<ScssIcon width={35} height={35} />}
                name="SCSS"
                percentage={94}
              />
            </div>
          </div>
          <div className={classes.textWithIconContainer2}>
            <TextWithIcon
              icon={<LanguagesIcon fill={COLORS.aqua} width={35} height={35} />}
              text={t("resumePage.generalSkillsBlock.lngsBlock.h")}
            />
            <div className={classes.lineSkillBlocksContainer}>
              <LineSkillBlock
                icon={<UKIcon width={35} height={35} />}
                name={t("resumePage.generalSkillsBlock.lngsBlock.en")}
                percentage={75}
                circled={true}
              />
              <LineSkillBlock
                icon={<RussiaIcon width={35} height={35} />}
                name={t("resumePage.generalSkillsBlock.lngsBlock.ru")}
                percentage={90}
                circled={true}
              />
              <LineSkillBlock
                icon={<BelarusIcon width={35} height={35} />}
                name={t("resumePage.generalSkillsBlock.lngsBlock.by")}
                percentage={20}
                circled={true}
              />
            </div>
          </div>
        </div>

        <div
          className={`${classes.textWithIconsContainer} ${classes.platformsAndKnowledgeContainer}`}
        >
          <div className={classes.textWithIconContainer1}>
            <TextWithIcon
              icon={<GearsIcon fill={COLORS.aqua} width={35} height={35} />}
              text={t("resumePage.generalSkillsBlock.platformsH")}
            />
            <div className={classes.platformsBlocksContainer}>
              <PlatformBlock percentage={90} name="Visual Studio Code" />
              <PlatformBlock percentage={70} name="Figma" />
              <PlatformBlock percentage={40} name="Xcode" />
              <PlatformBlock percentage={35} name="Adobe XD" />
            </div>
          </div>
          <div className={classes.textWithIconContainer2}>
            <TextWithIcon
              icon={<ListIcon stroke={COLORS.aqua} width={35} height={35} />}
              text={t("resumePage.generalSkillsBlock.knowledgeBlock.h")}
            />
            <div className={classes.knowledgeBlocksContainer}>
              {(
                t(
                  "resumePage.generalSkillsBlock.knowledgeBlock.knowledgesArr",
                  {
                    returnObjects: true,
                  }
                ) as string[]
              ).map((text, index) => (
                <KnowledgeBlock key={index} text={text} />
              ))}
              {/* <KnowledgeBlock text="JavaScript Frameworks/Libraries" />
              <KnowledgeBlock text="Git and GitHub" />
              <KnowledgeBlock text="Containerization with Docker" />
              <KnowledgeBlock text="NGINX Configuration" />
              <KnowledgeBlock text="Responsive Design" />
              <KnowledgeBlock text="Browser Developer Tools" />
              <KnowledgeBlock text="Integrating with third-party API's" />
              <KnowledgeBlock text="Object-Oriented Programming (OOP)" />
              <KnowledgeBlock text="Communication and collaboration" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
