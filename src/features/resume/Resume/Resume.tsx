import { useTranslation } from "react-i18next";
import "animate.css";
import { useViewport } from "@/providers/ViewportProvider";

import TextWithCircle from "@/components/textWithCircle/TextWithCircle";
import TextWithIcon from "@/components/textWithIcon/TextWithIcon";
import ExperienceBlock from "@/features/resume/ExperienceBlock/ExperienceBlock";
import EducationBlock from "@/features/resume/EducationBlock/EducationBlock";
import CircleSkillBlock from "@/features/resume/CircleSkillBlock/CircleSkillBlock";
import LineSkillBlock from "@/features/resume/LineSkillBlock/LineSkillBlock";
import PlatformBlock from "@/features/resume/PlatformBlock/PlatformBlock";
import KnowledgeBlock from "@/features/resume/KnowledgeBlock/KnowledgeBlock";

import { COLORS } from "@/assets/colors";
import {
  SuitcaseIcon,
  EducationIcon,
  KworkIcon,
  CodingIcon,
  LanguagesIcon,
  UKIcon,
  RussiaIcon,
  BelarusIcon,
  GearsIcon,
  ListIcon,
  ProgrammingLanguagesIcon,
  ConductorIcon,
  LipstickIcon,
  CraneIcon,
  ChemistryIcon,
  MultilanguageIcon,
  DevopsIcon,
  GraphIcon,
  ApiIcon,
  AnalyzeIcon,
} from "@/assets/icons";
import {
  BWGLogo,
  InginiriumLogo,
  EmotionalEggheadLogo,
} from "@/assets/images";
import { withBase } from "@/lib/withBase";

import classes from "./Resume.module.scss";

const EXPERIENCE: Array<{ key: string; logo: string; isPresent?: boolean }> = [
  { key: "block1", logo: withBase("logos/yandex.svg"), isPresent: true },
  { key: "block2", logo: EmotionalEggheadLogo },
  { key: "block3", logo: BWGLogo },
  { key: "block4", logo: InginiriumLogo },
  { key: "block5", logo: KworkIcon },
];

const GLOBAL_PROGRAMMING_SKILLS_ICONS_MAP = {
  ProgrammingLanguagesIcon,
  ConductorIcon,
  LipstickIcon,
  CraneIcon,
  ChemistryIcon,
  ApiIcon,
  GraphIcon,
};

const PROGRAMMING_SKILLS_ICONS_MAP = {
  MultilanguageIcon,
  DevopsIcon,
  GraphIcon,
  ApiIcon,
  AnalyzeIcon,
};

export default function Resume() {
  const { t } = useTranslation();
  const { isMobile } = useViewport();

  return (
    <div
      className={
        isMobile
          ? "mobileContent"
          : "content" +
            " animate__animated animate__slideInLeft animate__delay-0.7s"
      }
    >
      <div
        className={isMobile ? "mobileContentContainer" : "PCContentContainer"}
      >
        <TextWithCircle text={t("resumePage.h")} isFirst={true} />
        <div className={classes.textWithIconsContainer}>
          <div className={classes.textWithIconContainer1}>
            <TextWithIcon
              icon={<SuitcaseIcon fill={COLORS.aqua} width={35} height={35} />}
              text={t("resumePage.expBlock.h")}
            />
            {EXPERIENCE.map(({ key, logo, isPresent }) => (
              <div className={classes.expAndEduBlock} key={key}>
                <ExperienceBlock
                  period={t(`resumePage.expBlock.${key}.period`)}
                  isPresent={isPresent}
                  post={t(`resumePage.expBlock.${key}.post`)}
                  cpName={t(`resumePage.expBlock.${key}.cpName`)}
                  logo={logo}
                  desc={t(`resumePage.expBlock.${key}.desc`)}
                />
                <div
                  className={`${classes.dot} ${isPresent ? classes.present : ""}`}
                />
              </div>
            ))}
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
            isMobile && classes.mobile
          }`}
        >
          {(
            t("resumePage.progSkillsBlock.categories", {
              returnObjects: true,
            }) as Array<{
              title: string;
              percentage: number;
              iconName: keyof typeof GLOBAL_PROGRAMMING_SKILLS_ICONS_MAP;
              items: string[];
            }>
          ).map((category, index) => {
            const IconComponent =
              GLOBAL_PROGRAMMING_SKILLS_ICONS_MAP[category.iconName];
            return (
              <CircleSkillBlock
                icon={<IconComponent width={40} height={40} />}
                percentage={category.percentage}
                name={category.title}
                desc={category.items}
                key={`${category.title}-${index}`}
              />
            );
          })}
        </div>

        <TextWithCircle text={t("resumePage.generalSkillsBlock.h")} />
        <div className={classes.textWithIconsContainer}>
          <div className={classes.textWithIconContainer1}>
            <TextWithIcon
              icon={<CodingIcon fill={COLORS.aqua} width={35} height={35} />}
              text={t("resumePage.generalSkillsBlock.codingBlock.h")}
            />
            <div className={classes.lineSkillBlocksContainer}>
              {(
                t("resumePage.generalSkillsBlock.codingBlock.categories", {
                  returnObjects: true,
                }) as Array<{
                  title: string;
                  percentage: number;
                  iconName: keyof typeof PROGRAMMING_SKILLS_ICONS_MAP;
                  items: string[];
                }>
              ).map((category, index) => {
                const IconComponent =
                  PROGRAMMING_SKILLS_ICONS_MAP[category.iconName];
                return (
                  <LineSkillBlock
                    icon={<IconComponent width={40} height={40} />}
                    percentage={category.percentage}
                    name={category.title}
                    desc={category.items}
                    key={index}
                  />
                );
              })}
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
              <PlatformBlock percentage={92} name="Git / GitHub" />
              <PlatformBlock percentage={82} name="GitHub Actions" />
              <PlatformBlock percentage={78} name="Storybook" />
              <PlatformBlock percentage={72} name="Figma" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
