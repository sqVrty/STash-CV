import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { UKIcon, RussiaIcon } from "../../assets/svg's";

import classes from "./LanguagesModalContent.module.scss";

export default function LanguagesModalContent() {
  const { t, i18n } = useTranslation();
  const buttonsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const btnContainer = buttonsContainerRef.current;
    if (btnContainer) {
      const bgOffset = i18n.language === "en" ? 1 : 49;
      btnContainer.style.setProperty("--bg-offset", `${bgOffset}%`);
    }
  }, [i18n.language]);

  const handleLanguageClicked = (lng: string) => {
    i18n.changeLanguage(lng);
    // setTimeout(() => {
    //   window.location.reload();
    // }, 500);
  };

  return (
    <div className={classes.container}>
      <div className={classes.buttonsContainer} ref={buttonsContainerRef}>
        <button
          className={`${classes.buttonContainer} ${
            i18n.language === "en" && classes.active
          }`}
          onClick={() => handleLanguageClicked("en")}
        >
          <UKIcon width={30} height={30} />
          <p>English</p>
        </button>
        <button
          className={`${classes.buttonContainer} ${
            i18n.language === "ru" && classes.active
          }`}
          onClick={() => handleLanguageClicked("ru")}
        >
          <RussiaIcon width={30} height={30} />
          <p>Русский</p>
        </button>
      </div>
    </div>
  );
}
