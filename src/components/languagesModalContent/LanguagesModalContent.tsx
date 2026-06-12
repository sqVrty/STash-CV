import { useRef, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { useProjectModal } from "@/providers/ProjectModalProvider";
import { UKIcon, RussiaIcon } from "@/assets/icons";

import classes from "./LanguagesModalContent.module.scss";

export default function LanguagesModalContent() {
  const { i18n } = useTranslation();
  const { closeProject } = useProjectModal();
  const buttonsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = buttonsContainerRef.current;
    if (container) {
      const bgOffset = i18n.language === "en" ? 1 : 49;
      container.style.setProperty("--bg-offset", `${bgOffset}%`);
    }
  }, [i18n.language]);

  const handleLanguageClick = useCallback(
    (language: string) => {
      // Project data is captured per-language, so close any open project
      // modal to avoid showing stale content after switching.
      i18n.changeLanguage(language).then(() => closeProject());
    },
    [i18n, closeProject]
  );

  return (
    <div className={classes.container}>
      <div className={classes.buttonsContainer} ref={buttonsContainerRef}>
        <button
          className={`${classes.buttonContainer} ${
            i18n.language === "en" ? classes.active : ""
          }`}
          onClick={() => handleLanguageClick("en")}
        >
          <UKIcon width={30} height={30} />
          <p>English</p>
        </button>
        <button
          className={`${classes.buttonContainer} ${
            i18n.language === "ru" ? classes.active : ""
          }`}
          onClick={() => handleLanguageClick("ru")}
        >
          <RussiaIcon width={30} height={30} />
          <p>Русский</p>
        </button>
      </div>
    </div>
  );
}
