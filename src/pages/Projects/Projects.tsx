import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../app/hooks";

import { MyAvatar } from "../../assets/img's";

import TextWithCircle from "../../components/textWithCircle/TextWithCircle";
import PreviewWorkBlock from "./components/PreviewWorkBlock";

import type { IProject } from "../../redux/features/workExampleModalInfoSlice";

import classes from "./Projects.module.scss";

export default function Projects() {
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
        <TextWithCircle text="Works" isFirst={true} />
        <div className={classes.workBlocksContainer}>
          {(
            t("projectsPage.projects", { returnObjects: true }) as IProject[]
          ).map((data, index) => (
            <div className={classes.blockContainer} key={index}>
              <PreviewWorkBlock
                previewImg={require("../../assets/img's/" + data.mainImg)}
                category={data.category}
                header={data.header}
                data={data}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
