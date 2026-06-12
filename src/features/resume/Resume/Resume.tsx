import { useTranslation } from "react-i18next";
import "animate.css";
import { useViewport } from "@/providers/ViewportProvider";

import TextWithCircle from "@/components/textWithCircle/TextWithCircle";
import TextWithIcon from "@/components/textWithIcon/TextWithIcon";
import ExperienceBlock from "@/features/resume/ExperienceBlock/ExperienceBlock";
import EducationBlock from "@/features/resume/EducationBlock/EducationBlock";
import PreProBlock from "@/features/resume/PreProBlock/PreProBlock";
import SkillTagGroup from "@/features/resume/SkillTagGroup/SkillTagGroup";
import KnowledgeBlock from "@/features/resume/KnowledgeBlock/KnowledgeBlock";

import { COLORS } from "@/assets/colors";
import { SuitcaseIcon, EducationIcon } from "@/assets/icons";
import { BWGLogo, EmotionalEggheadLogo } from "@/assets/images";
import { withBase } from "@/lib/withBase";

import classes from "./Resume.module.scss";

const EXPERIENCE: Array<{ key: string; logo: string; isPresent?: boolean }> = [
  { key: "block1", logo: withBase("logos/yandex.svg"), isPresent: true },
  { key: "block2", logo: EmotionalEggheadLogo },
  { key: "block3", logo: BWGLogo },
];

export default function Resume() {
  const { t } = useTranslation();
  const { isMobile } = useViewport();

  const skillGroups = t("resumePage.skillsBlock.groups", {
    returnObjects: true,
  }) as Array<{ title: string; tags: string[] }>;

  const strengths = t("resumePage.strengthsBlock.items", {
    returnObjects: true,
  }) as string[];

  const preProItems = t("resumePage.expBlock.preProItems", {
    returnObjects: true,
  }) as Array<{
    post: string;
    cpName: string;
    period: string;
    stack: string;
  }>;

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
            <div className={classes.expAndEduBlock}>
              <PreProBlock
                title={t("resumePage.expBlock.preProH")}
                items={preProItems}
              />
              <div className={classes.dot} />
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

        <TextWithCircle text={t("resumePage.skillsBlock.h")} />
        <div className={classes.skillGroupsContainer}>
          {skillGroups.map((group) => (
            <SkillTagGroup
              key={group.title}
              title={group.title}
              tags={group.tags}
            />
          ))}
        </div>

        <TextWithCircle text={t("resumePage.strengthsBlock.h")} />
        <div className={classes.strengthsContainer}>
          {strengths.map((text, index) => (
            <KnowledgeBlock key={index} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
}
