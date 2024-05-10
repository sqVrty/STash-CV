import "animate.css";
import { useAppSelector } from "../../app/hooks";

import TextWithCircle from "../../components/textWithCircle/TextWithCircle";
import TextWithIcon from "../../components/textWithIcon/TextWithIcon";
import ExperienceBlock from "./components/ExperienceBlock";
import EducationBlock from "./components/EducationBlock";
import CircleSkillBlock from "./components/CircleSkillsBlock";
import LineSkillBlock from "./components/LineSkillBlock";

import { COLORS } from "../../assets/colors";
import {
  SuitcaseIcon,
  EducationIcon,
  KworkIcon,
  JavascriptIcon,
  ScssIcon,
  PythonIcon,
  CppIcon,
  CodingIcon,
  LanguagesIcon,
  ReactColoredIcon,
  UKIcon,
  RussiaIcon,
  BelarusIcon,
} from "../../assets/svg's";
import {
  BMSTULogo,
  InginiriumLogo,
  EmotionalEggheadLogo,
} from "../../assets/img's";

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
                logo={EmotionalEggheadLogo}
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
        <div className={classes.progSkillsContainer}>
          <CircleSkillBlock
            icon={<JavascriptIcon width={40} height={40} />}
            percentage={90}
            name="JavaScript"
          />
          <CircleSkillBlock
            icon={<ScssIcon width={40} height={40} />}
            percentage={9}
            name="SCSS"
          />
          <CircleSkillBlock
            icon={<PythonIcon width={40} height={40} />}
            percentage={40}
            name="Python"
          />
          <CircleSkillBlock
            icon={<CppIcon width={40} height={40} />}
            percentage={40}
            name="C++"
          />
        </div>

        <TextWithCircle text="General Skills" />
        <div className={classes.codingAndLangContainer}>
          <div className={classes.codingContainer}>
            <TextWithIcon
              icon={<CodingIcon fill={COLORS.aqua} width={35} height={35} />}
              text="Coding"
            />
            <LineSkillBlock
              icon={<ReactColoredIcon width={35} height={35} />}
              name="React"
              percentage={77}
            />
            <LineSkillBlock
              icon={<JavascriptIcon width={35} height={35} />}
              name="React"
              percentage={90}
            />
          </div>
          <div className={classes.langContainer}>
            <TextWithIcon
              icon={<LanguagesIcon fill={COLORS.aqua} width={35} height={35} />}
              text="Languages"
            />
            <LineSkillBlock
              icon={<UKIcon width={35} height={35} />}
              name="English"
              percentage={75}
              circled={true}
            />
            <LineSkillBlock
              icon={<RussiaIcon width={35} height={35} />}
              name="Russian"
              percentage={90}
              circled={true}
            />
            <LineSkillBlock
              icon={<BelarusIcon width={35} height={35} />}
              name="Belarusian"
              percentage={35}
              circled={true}
            />
          </div>
        </div>

        <TextWithCircle text="General Skills" />
      </div>
    </div>
  );
}
