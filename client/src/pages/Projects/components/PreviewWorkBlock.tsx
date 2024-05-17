import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  setIsOpen,
  setData,
} from "../../../redux/features/workExampleModalInfoSlice";
import { useState, MouseEvent, useCallback } from "react";
import "animate.css";

import { COLORS } from "../../../assets/colors";
import { GoOverIcon, EyeIcon } from "../../../assets/svg's";

import type { IProject } from "../../../redux/features/workExampleModalInfoSlice";

import classes from "./PreviewWorkBlock.module.scss";

export default function PreviewWorkBlock({
  previewImg,
  category,
  header,
  data,
}: {
  previewImg: string;
  category: string;
  header: string;
  data: IProject;
}) {
  const dispatch = useAppDispatch();
  const isWorkExampleModalOpen = useAppSelector(
    (state) => state.workExampleModalInfo.isOpen
  );
  const [hoverActiveBlock, setHoverActiveBlock] = useState<string | null>(null);
  const [showEyeTimer, setShowEyeTimer] = useState<boolean>(false);

  const isActive = hoverActiveBlock === header;

  const handleMouseEnter = (header: string) => {
    setHoverActiveBlock(header);
    setShowEyeTimer(true);
  };

  const handleMouseLeave = () => {
    setHoverActiveBlock(null);
    setTimeout(() => setShowEyeTimer(false), 350);
  };

  const handleBlockClicked = useCallback(() => {
    dispatch(setData(data));
    dispatch(setIsOpen(!isWorkExampleModalOpen));
  }, [dispatch]);

  console.log(previewImg);

  return (
    <div
      className={classes.container}
      onMouseEnter={(e: MouseEvent) => handleMouseEnter(header)}
      onMouseLeave={handleMouseLeave}
      onClick={handleBlockClicked}
    >
      <div className={classes.imgWrapper}>
        <img
          src={previewImg}
          className={`${classes.image} ${isActive && classes.hovered}`}
        />
        <div
          className={`${classes.background} ${isActive && classes.hovered}`}
          style={
            showEyeTimer
              ? {
                  background: `linear-gradient(to bottom right, ${COLORS.aqua}, transparent)`,
                }
              : {}
          }
        />
        <div
          className={`${classes.eyeIconContainer} ${
            isActive
              ? "animate__animated animate__fadeIn animate__delay-0.4s"
              : "animate__animated animate__fadeOut animate__delay-0.2s"
          }`}
          style={{ display: showEyeTimer ? "flex" : "none" }}
        >
          <EyeIcon fill={COLORS.white} width={55} height={55} />
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <div className={classes.textContainer}>
          <p className={classes.type} style={{ color: COLORS.gray }}>
            {category}
          </p>
          <p
            className={classes.header}
            style={isActive ? { color: COLORS.aqua } : {}}
          >
            {header}
          </p>
        </div>
        <div className={classes.linkButtonContainer}>
          <GoOverIcon
            stroke={isActive ? COLORS.aqua : COLORS.white}
            width={20}
            height={20}
            className={classes.icon}
          />
        </div>
      </div>
    </div>
  );
}
