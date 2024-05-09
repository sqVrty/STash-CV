import "animate.css";
import { useAppSelector } from "../../app/hooks";

import TextWithCircle from "../../components/textWithCircle/TextWithCircle";
import TextWithIcon from "../../components/textWithIcon/TextWithIcon";
import ExperienceBlock from "./components/ExperienceBlock";
import EducationBlock from "./components/EducationBlock";

import { COLORS } from "../../assets/colors";
import {
  SuitcaseIcon,
  EducationIcon,
  EmotionalEggheadIcon,
  KworkIcon,
} from "../../assets/svg's";
import { BMSTULogo, InginiriumLogo } from "../../assets/img's";

import classes from "./Skills.module.scss";

export default function Skills() {
  const isMobileDevice = useAppSelector(
    (state) => state.deviceInfo.isMobileDevice
  );

  return (
    <div
      className={
        "content" +
        " animate__animated animate__slideInLeft animate__delay-0.7s"
      }
    >
      <div className="PCContentContainer">
        <TextWithCircle text="Resume" isFirst={true} />
        <div className={classes.expAndEduContainer}>
          <div className={classes.experienceContainer}>
            <TextWithIcon
              icon={<SuitcaseIcon fill={COLORS.aqua} width={35} height={35} />}
              text="Experience"
            />
            <div className={classes.block}>
              <ExperienceBlock
                period="2013 - Present"
                isPresent={true}
                post="Software Engineer"
                cpName="Google Inc."
                logo={EmotionalEggheadIcon}
                desc="applied the engineering design process to design, develop, test, maintain, and evaluate software."
              />
              <div className={`${classes.dot} ${classes.present}`} />
            </div>
            <div className={classes.block}>
              <ExperienceBlock
                period="2011 - 2012"
                post="Data Scientist"
                cpName="Upwork Inc."
                logo={BMSTULogo}
                desc="applied the engineering design process to design, develop, test, maintain, and evaluate software."
              />
              <div className={`${classes.dot}`} />
            </div>
            <div className={classes.block}>
              <ExperienceBlock
                period="2011 - 2012"
                post="Data Scientist"
                cpName="Upwork Inc."
                logo={InginiriumLogo}
                desc="applied the engineering design process to design, develop, test, maintain, and evaluate software."
              />
              <div className={`${classes.dot}`} />
            </div>
            <div className={classes.block}>
              <ExperienceBlock
                period="2011 - 2012"
                post="Data Scientist"
                cpName="Upwork Inc."
                logo={KworkIcon}
                desc="applied the engineering design process to design, develop, test, maintain, and evaluate software."
              />
              <div className={`${classes.dot}`} />
            </div>
          </div>
          <div className={classes.educationContainer}>
            <TextWithIcon
              icon={<EducationIcon fill={COLORS.aqua} width={35} height={35} />}
              text="Education"
            />
            <div className={classes.block}>
              <EducationBlock
                period="2022 - Present"
                isPresent={true}
                name="Bauman Moscow State Technical University"
                city="Moscow"
                desc="applied the engineering design process to design, develop, test, maintain, and evaluate software."
              />
              <div className={`${classes.dot} ${classes.present}`} />
            </div>
            <div className={classes.block}>
              <EducationBlock
                period="2011 - 2022"
                name="Gymnasium No. 7"
                city="Minsk"
                desc="applied the engineering design process to design, develop, test, maintain, and evaluate software."
              />
              <div className={`${classes.dot}`} />
            </div>
          </div>
        </div>

        <TextWithCircle text="Programming Skills" />
      </div>
    </div>
  );
}
