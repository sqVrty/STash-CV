import { useAppSelector } from "../../app/hooks";

import TextWithCircle from "../../components/textWithCircle/TextWithCircle";
import PreviewWorkBlock from "./components/PreviewWorkBlock";

import classes from "./Projects.module.scss";

export default function Projects() {
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
          <div className={classes.blockContainer}>
            <PreviewWorkBlock
              previewImg="https://ryancv.bslthemes.com/app-developer/wp-content/uploads/sites/19/2020/04/work-r2.jpg"
              type="Website"
              header="Analytics Dashboard Software Tool"
            />
          </div>
          <div className={classes.blockContainer}>
            <PreviewWorkBlock
              previewImg="https://ryancv.bslthemes.com/app-developer/wp-content/uploads/sites/19/2020/04/work2-1.jpg"
              type="Mobile App"
              header="Cryptocurrency Dashboard Application"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
