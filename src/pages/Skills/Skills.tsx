import "animate.css";
import { useAppSelector } from "../../app/hooks";

import TextWithCircle from "../../components/textWithCircle/TextWithCircle";
import TextWithIcon from "../../components/textWithIcon/TextWithIcon";
import ExperienceBlock from "./components/ExperienceBlock";
import EducationBlock from "./components/EducationBlock";
import CircleSkillBlock from "./components/CircleSkillsBlock";
import LineSkillBlock from "./components/LineSkillBlock";
import PlatformBlock from "./components/PlatformBlock";
import KnowledgeBlock from "./components/KnowledgeBlock";

import { COLORS } from "../../assets/colors";
import {
  SuitcaseIcon,
  EducationIcon,
  KworkIcon,
  JavascriptIcon,
  ReduxIcon,
  PythonIcon,
  CppIcon,
  CodingIcon,
  LanguagesIcon,
  ReactColoredIcon,
  TypeScriptIcon,
  ScssIcon,
  UKIcon,
  RussiaIcon,
  BelarusIcon,
  GearsIcon,
  ListIcon,
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
        <div className={classes.textWithIconsContainer}>
          <div className={classes.textWithIconContainer1}>
            <TextWithIcon
              icon={<SuitcaseIcon fill={COLORS.aqua} width={35} height={35} />}
              text="Experience"
            />
            <div className={classes.expAndEduBlock}>
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
            <div className={classes.expAndEduBlock}>
              <ExperienceBlock
                period="2011 - 2012"
                post="Data Scientist"
                cpName="Upwork Inc."
                logo={BMSTULogo}
                desc="applied the engineering design process to design, develop, test, maintain, and evaluate software."
              />
              <div className={`${classes.dot}`} />
            </div>
            <div className={classes.expAndEduBlock}>
              <ExperienceBlock
                period="2011 - 2012"
                post="Data Scientist"
                cpName="Upwork Inc."
                logo={InginiriumLogo}
                desc="applied the engineering design process to design, develop, test, maintain, and evaluate software."
              />
              <div className={`${classes.dot}`} />
            </div>
            <div className={classes.expAndEduBlock}>
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
          <div className={classes.textWithIconContainer2}>
            <TextWithIcon
              icon={<EducationIcon fill={COLORS.aqua} width={35} height={35} />}
              text="Education"
            />
            <div className={classes.expAndEduBlock}>
              <EducationBlock
                period="2022 - Present"
                isPresent={true}
                name="Bauman Moscow State Technical University"
                city="Moscow"
                desc="applied the engineering design process to design, develop, test, maintain, and evaluate software."
              />
              <div className={`${classes.dot} ${classes.present}`} />
            </div>
            <div className={classes.expAndEduBlock}>
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
            icon={<ReduxIcon width={40} height={40} />}
            percentage={9}
            name="Redux"
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
        <div className={classes.textWithIconsContainer}>
          <div className={classes.textWithIconContainer1}>
            <TextWithIcon
              icon={<CodingIcon fill={COLORS.aqua} width={35} height={35} />}
              text="Coding"
            />
            <div className={classes.lineSkillBlocksContainer}>
              <LineSkillBlock
                icon={<ReactColoredIcon width={35} height={35} />}
                name="React"
                percentage={82}
              />
              <LineSkillBlock
                icon={<ReactColoredIcon width={35} height={35} />}
                name="React Native"
                percentage={69}
              />
              <LineSkillBlock
                icon={<TypeScriptIcon width={35} height={35} />}
                name="TypeScript"
                percentage={90}
              />
              <LineSkillBlock
                icon={<ScssIcon width={35} height={35} />}
                name="SCSS"
                percentage={94}
              />
            </div>
          </div>
          <div className={classes.textWithIconContainer2}>
            <TextWithIcon
              icon={<LanguagesIcon fill={COLORS.aqua} width={35} height={35} />}
              text="Languages"
            />
            <div className={classes.lineSkillBlocksContainer}>
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
        </div>

        <div
          className={`${classes.textWithIconsContainer} ${classes.platformsAndKnowledgeContainer}`}
        >
          <div className={classes.textWithIconContainer1}>
            <TextWithIcon
              icon={<GearsIcon fill={COLORS.aqua} width={35} height={35} />}
              text="Platforms"
            />
            <div className={classes.platformsBlocksContainer}>
              <PlatformBlock percentage={90} name="Visual Studio Code" />
              <PlatformBlock percentage={70} name="Figma" />
              <PlatformBlock percentage={40} name="Xcode" />
              <PlatformBlock percentage={35} name="Adobe XD" />
            </div>
          </div>
          <div className={classes.textWithIconContainer2}>
            <TextWithIcon
              icon={<ListIcon stroke={COLORS.aqua} width={35} height={35} />}
              text="Knowledge"
            />
            <div className={classes.knowledgeBlocksContainer}>
              <KnowledgeBlock text="JavaScript Frameworks/Libraries" />
              <KnowledgeBlock text="Git and GitHub" />
              <KnowledgeBlock text="Containerization with Docker" />
              <KnowledgeBlock text="NGINX Configuration" />
              <KnowledgeBlock text="Responsive Design" />
              <KnowledgeBlock text="Browser Developer Tools" />
              <KnowledgeBlock text="Integrating with third-party API's" />
              <KnowledgeBlock text="Object-Oriented Programming (OOP)" />
              <KnowledgeBlock text="Communication and collaboration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
