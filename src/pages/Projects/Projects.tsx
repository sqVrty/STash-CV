import { useAppSelector } from "../../app/hooks";

import TextWithCircle from "../../components/textWithCircle/TextWithCircle";

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
      </div>
    </div>
  );
}
