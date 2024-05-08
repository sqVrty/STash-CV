import { useState, useEffect } from "react";

import BurgerMenu from "./BurgerMenu";

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
        <div className={classes.textContainer}>
          <h1 className={classes.logo} style={{ color: COLORS.aqua }}>
            ST
          </h1>
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
