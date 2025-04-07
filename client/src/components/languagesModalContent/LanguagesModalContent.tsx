import { useRef, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { useAppDispatch } from "../../app/hooks";
import { resetData } from "../../redux/features/workExampleModalInfoSlice";

import { UKIcon, RussiaIcon } from "../../assets/svg's";

import classes from "./LanguagesModalContent.module.scss";

export default function LanguagesModalContent() {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const buttonsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const btnContainer = buttonsContainerRef.current;
    if (btnContainer) {
      const bgOffset = i18n.language === "en" ? 1 : 49;
      btnContainer.style.setProperty("--bg-offset", `${bgOffset}%`);
    }
  }, [i18n.language]);

  const handleLanguageClicked = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng).then(() => {
        dispatch(resetData());
      });
    },
    [dispatch, i18n]
  );

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
