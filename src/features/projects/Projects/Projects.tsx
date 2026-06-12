import { useTranslation } from "react-i18next";

import { useViewport } from "@/providers/ViewportProvider";

import TextWithCircle from "@/components/textWithCircle/TextWithCircle";
import PreviewWorkBlock from "@/features/projects/PreviewWorkBlock/PreviewWorkBlock";

import type { Project } from "@/types/project";

import classes from "./Projects.module.scss";

export default function Projects() {
  const { t } = useTranslation();
  const { isMobile } = useViewport();

  const projects = t("projectsPage.projects", {
    returnObjects: true,
  }) as Project[];
  const hasEvenCount = projects.length % 2 === 0;

  return (
    <div
      className={
        isMobile
          ? "mobileContent"
          : "content animate__animated animate__slideInLeft animate__delay-0.7s"
      }
    >
      <div
        className={isMobile ? "mobileContentContainer" : "PCContentContainer"}
      >
        <TextWithCircle text={t("projectsPage.h")} isFirst />
        <div className={classes.workBlocksContainer}>
          {projects.map((project, index) => (
            <div
              className={`${classes.blockContainer} ${
                hasEvenCount ? classes.evenBlocksAmount : ""
              }`}
              key={index}
            >
              <PreviewWorkBlock project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
