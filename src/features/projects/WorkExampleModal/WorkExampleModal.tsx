import { useCallback, type MouseEvent } from "react";
import { useTranslation } from "react-i18next";

import { useProjectModal } from "@/providers/ProjectModalProvider";
import { useViewport } from "@/providers/ViewportProvider";
import { useModalEffects } from "@/hooks/useModalEffects";
import { withBase } from "@/lib/withBase";

import InfoListBlock from "@/features/projects/InfoListBlock/InfoListBlock";
import ScreenShotsCarousel from "@/features/projects/ScreenShotsCarousel/ScreenShotsCarousel";

import { COLORS } from "@/assets/colors";
import { CrossIcon, LockIcon } from "@/assets/icons";

import classes from "./WorkExampleModal.module.scss";

const MODAL_SELECTOR = "#modal";

export default function WorkExampleModal() {
  const { t } = useTranslation();
  const { project, closeProject } = useProjectModal();
  const { isMobile, height } = useViewport();

  useModalEffects(project !== null, closeProject, {
    scrollableSelector: MODAL_SELECTOR,
  });

  const handleOverlayClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) closeProject();
    },
    [closeProject]
  );

  if (!project) return null;

  return (
    <div className={classes.overlay} onClick={handleOverlayClick}>
      <div
        id="modal"
        className={classes.modal}
        style={isMobile ? { height: `${height}px` } : undefined}
      >
        <div className={classes.mainImgContainer}>
          <img src={withBase(project.mainImg)} className={classes.mainImg} />
          <CrossIcon
            width={30}
            height={30}
            className={classes.crossIcon}
            onClick={closeProject}
          />
          <div className={classes.contentContainer}>
            <h1 className={classes.header}>{project.header}</h1>
            <p className={classes.categoty} style={{ color: COLORS.gray }}>
              {project.category}
            </p>
            <div className={classes.infoListContainer}>
              <InfoListBlock
                fieldName={t("projectsPage.workExampleModal.dateH")}
                answer={project.date}
              />
              <InfoListBlock
                fieldName={t("projectsPage.workExampleModal.clientH")}
                answer={project.client}
              />
              <InfoListBlock
                fieldName={t("projectsPage.workExampleModal.categoryH")}
                answer={project.category}
              />
              <InfoListBlock
                fieldName={t("projectsPage.workExampleModal.linkH")}
                answer={project.link}
                isLastElement
              />
            </div>
            <p className={classes.desc} style={{ color: COLORS.gray }}>
              {project.text1}
            </p>
            {project.imgsArray && project.imgsArray.length > 0 ? (
              <div className={classes.screenShotsCarouselContainer}>
                <ScreenShotsCarousel images={project.imgsArray.map(withBase)} />
              </div>
            ) : (
              <div className={classes.ndaNotice}>
                <div className={classes.ndaIconContainer}>
                  <LockIcon fill={COLORS.aqua} width={26} height={26} />
                </div>
                <p className={classes.ndaText}>
                  {t("projectsPage.workExampleModal.ndaNotice")}
                </p>
              </div>
            )}
            <p className={classes.desc} style={{ color: COLORS.gray }}>
              {project.text2}
            </p>
            <div
              className={classes.line}
              style={{ backgroundColor: COLORS.gray }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
