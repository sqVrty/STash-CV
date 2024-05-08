import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

import BurgerMenu from "./BurgerMenu";

import { AvatarPhoto } from "../../../assets/img's";
import { MenuIcon } from "../../../assets/svg's";
import { COLORS } from "./../../../assets/colors";

import classes from "./MobileHeader.module.scss";

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className="mobileHeader">
      <div className={classes.container}>
        <div className={classes.paddingContainer}>
          <div className={classes.leftBlock}>
            <img src={AvatarPhoto} className={classes.avatarImage} />
            <div className={classes.textContainer}>
              <p className={classes.name}>Ren Nolan</p>
              <TypeAnimation
                sequence={[
                  "Developer",
                  3000,
                  "Application Developer",
                  3000,
                  "UI/UX Designer",
                  3000,
                ]}
                className={classes.career}
                style={{ color: COLORS.aqua }}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className={classes.rightBlock}>
            <MenuIcon
              fill="white"
              width={24}
              height={24}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <BurgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}
