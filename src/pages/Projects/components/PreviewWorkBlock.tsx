import { useState, useCallback } from "react";
import "animate.css";

import { useProjectModal } from "../../../providers/ProjectModalProvider";
import { withBase } from "../../../lib/withBase";
import { COLORS } from "../../../assets/colors";
import { GoOverIcon, EyeIcon } from "../../../assets/icons";

import type { Project } from "../../../types/project";

import classes from "./PreviewWorkBlock.module.scss";

export default function PreviewWorkBlock({ project }: { project: Project }) {
  const { openProject } = useProjectModal();
  const [isHovered, setIsHovered] = useState(false);
  const [showEyeIcon, setShowEyeIcon] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowEyeIcon(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimeout(() => setShowEyeIcon(false), 350);
  };

  const handleClick = useCallback(
    () => openProject(project),
    [openProject, project]
  );

  return (
    <div
      className={classes.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={classes.imgWrapper}>
        <img
          src={withBase(project.mainImg)}
          className={`${classes.image} ${isHovered ? classes.hovered : ""}`}
        />
        <div
          className={`${classes.background} ${isHovered ? classes.hovered : ""}`}
          style={
            showEyeIcon
              ? {
                  background: `linear-gradient(to bottom right, ${COLORS.aqua}, transparent)`,
                }
              : undefined
          }
        />
        <div
          className={`${classes.eyeIconContainer} ${
            isHovered
              ? "animate__animated animate__fadeIn animate__delay-0.4s"
              : "animate__animated animate__fadeOut animate__delay-0.2s"
          }`}
          style={{ display: showEyeIcon ? "flex" : "none" }}
        >
          <EyeIcon fill={COLORS.white} width={55} height={55} />
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <div className={classes.textContainer}>
          <p className={classes.type} style={{ color: COLORS.gray }}>
            {project.category}
          </p>
          <p
            className={classes.header}
            style={isHovered ? { color: COLORS.aqua } : undefined}
          >
            {project.header}
          </p>
        </div>
        <div className={classes.linkButtonContainer}>
          <GoOverIcon
            stroke={isHovered ? COLORS.aqua : COLORS.white}
            width={20}
            height={20}
            className={classes.icon}
          />
        </div>
      </div>
    </div>
  );
}
