import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";
import "animate.css";
import { useViewport } from "@/providers/ViewportProvider";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import TextWithCircle from "@/components/textWithCircle/TextWithCircle";
import ServiceBlock from "@/features/about/ServiceBlock/ServiceBlock";
import TestimonialsBlock from "@/features/about/TestimonialsBlock/TestimonialsBlock";
import FactBlock from "@/features/about/FactBlock/FactBlock";
import PhotoMobileContainer from "@/components/photoMobileContainer/PhotoMobileContainer";

import { getCommercialExperienceYears } from "@/lib/experience";
import { COLORS } from "@/assets/colors";
import {
  GlebAvatar,
  TimurAvatar,
  AlisaAvatar,
  AntonAvatar,
  PavelAvatar,
} from "@/assets/images";
import {
  ReactIcon,
  CodingIcon,
  BrushIcon,
  GitHubIcon,
  ZapIcon,
  SpeedometerIcon,
  HighSpeedTrainIcon,
} from "@/assets/icons";

import classes from "./About.module.scss";

const TESTIMONIALS: Array<{ key: string; img: string; stars: number }> = [
  { key: "block1", img: GlebAvatar, stars: 5 },
  { key: "block2", img: TimurAvatar, stars: 5 },
  { key: "block3", img: AlisaAvatar, stars: 5 },
  { key: "block4", img: AntonAvatar, stars: 4 },
  { key: "block5", img: PavelAvatar, stars: 5 },
];

function pluralYearsRu(n: number): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "год";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "года";
  return "лет";
}

export default function About() {
  const { t, i18n } = useTranslation();
  const { isMobile, width } = useViewport();

  const paginationRef = useRef(null);
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  useEffect(() => {
    if (swiper) {
      swiper.update();
    }
  }, [swiper]);

  const myBdDate = new Date("2004-11-12");
  const todayDate = new Date();

  let myAge = todayDate.getFullYear() - myBdDate.getFullYear();

  const hasNotHadBirthdayThisYear =
    todayDate.getMonth() < myBdDate.getMonth() ||
    (todayDate.getMonth() === myBdDate.getMonth() &&
      todayDate.getDate() < myBdDate.getDate());

  if (hasNotHadBirthdayThisYear) {
    myAge--;
  }

  const expYears = getCommercialExperienceYears(todayDate);
  const exp = i18n.language.startsWith("ru")
    ? `${expYears}+ ${pluralYearsRu(expYears)}`
    : `${expYears}+ years`;

  return (
    <>
      {isMobile && <PhotoMobileContainer />}
      <div
        className={
          isMobile
            ? "mobileContent"
            : "content" +
              " animate__animated animate__slideInLeft animate__delay-0.7s"
        }
        style={
          isMobile
            ? {
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                marginTop: 20,
              }
            : {}
        }
      >
        <div
          className={isMobile ? "mobileContentContainer" : "PCContentContainer"}
        >
          <div className={classes.heyContainer}>
            <TextWithCircle text={t("aboutPage.aboutBlock.h")} isFirst={true} />
            <p className={classes.tagline}>
              {t("aboutPage.aboutBlock.tagline")}
            </p>
            <p
              style={{ color: COLORS.gray }}
              dangerouslySetInnerHTML={{
                __html: t("aboutPage.aboutBlock.desc", { exp }),
              }}
            />
            <div className={classes.aboutDataContainer}>
              <p className={classes.question}>
                {t("aboutPage.aboutBlock.ageQ")}:{" "}
                <span className={classes.dots}>....</span>
                <span className={classes.answer} style={{ color: COLORS.gray }}>
                  {myAge}
                </span>
              </p>
              <p className={classes.question}>
                {t("aboutPage.aboutBlock.locationQ")}:{" "}
                <span className={classes.dots}>....</span>
                <span className={classes.answer} style={{ color: COLORS.gray }}>
                  {t("aboutPage.aboutBlock.locationA")}
                </span>
              </p>
              <p className={classes.question}>
                {t("aboutPage.aboutBlock.lngsQ")}:{" "}
                <span className={classes.dots}>....</span>
                <span className={classes.answer} style={{ color: COLORS.gray }}>
                  {t("aboutPage.aboutBlock.lngsA")}
                </span>
              </p>
              <p className={classes.question}>
                {t("aboutPage.aboutBlock.stackQ")}:{" "}
                <span className={classes.dots}>....</span>
                <span className={classes.answer} style={{ color: COLORS.gray }}>
                  React + TypeScript
                </span>
              </p>
            </div>
          </div>

          <TextWithCircle text={t("aboutPage.factsBlock.h")} />
          <div className={classes.factsContainer}>
            <div className={classes.delimiterContainer}>
              <FactBlock
                icon={<ZapIcon fill={COLORS.aqua} width={35} height={35} />}
                text={t("aboutPage.factsBlock.block1.h")}
              />
            </div>
            <div className={classes.delimiterContainer}>
              <FactBlock
                icon={
                  <HighSpeedTrainIcon
                    fill={COLORS.aqua}
                    width={35}
                    height={35}
                  />
                }
                text={t("aboutPage.factsBlock.block2.h")}
              />
            </div>
            <div className={classes.delimiterContainer}>
              <FactBlock
                icon={
                  <SpeedometerIcon fill={COLORS.aqua} width={35} height={35} />
                }
                text={t("aboutPage.factsBlock.block3.h")}
              />
            </div>
            <div className={classes.delimiterContainer}>
              <FactBlock
                icon={<BrushIcon fill={COLORS.aqua} width={35} height={35} />}
                text={t("aboutPage.factsBlock.block4.h")}
              />
            </div>
          </div>

          <TextWithCircle text={t("aboutPage.servicesBlock.h")} />
          <div className={classes.servicesGrid}>
            <div className={classes.crossContainer}>
              <ServiceBlock
                icon={<CodingIcon fill={COLORS.aqua} width={40} height={40} />}
                header={t("aboutPage.servicesBlock.block1.h")}
                desc={t("aboutPage.servicesBlock.block1.desc")}
              />
            </div>
            <div className={classes.crossContainer}>
              <ServiceBlock
                icon={<ReactIcon fill={COLORS.aqua} width={40} height={40} />}
                header={t("aboutPage.servicesBlock.block2.h")}
                desc={t("aboutPage.servicesBlock.block2.desc")}
              />
            </div>
            <div className={classes.crossContainer}>
              <ServiceBlock
                icon={<BrushIcon fill={COLORS.aqua} width={40} height={40} />}
                header={t("aboutPage.servicesBlock.block3.h")}
                desc={t("aboutPage.servicesBlock.block3.desc")}
              />
            </div>
            <div className={classes.crossContainer}>
              <ServiceBlock
                icon={<GitHubIcon fill={COLORS.aqua} width={40} height={40} />}
                header={t("aboutPage.servicesBlock.block4.h")}
                desc={t("aboutPage.servicesBlock.block4.desc")}
              />
            </div>
          </div>

          <TextWithCircle text={t("aboutPage.testimonialsBlock.h")} />
          <div className={classes.testimonials}>
            <Swiper
              onSwiper={setSwiper}
              slidesPerView={width < 600 ? 1 : 2}
              spaceBetween={30}
              pagination={{
                el: paginationRef.current,
                clickable: true,
              }}
              keyboard={{ enabled: true, onlyInViewport: true }}
              modules={[Pagination, Keyboard]}
              className={classes.swiper}
            >
              {TESTIMONIALS.map(({ key, img, stars }) => (
                <SwiperSlide className={classes.swiperSlide} key={key}>
                  <TestimonialsBlock
                    img={img}
                    name={t(`aboutPage.testimonialsBlock.${key}.name`)}
                    post={t(`aboutPage.testimonialsBlock.${key}.post`)}
                    review={t(`aboutPage.testimonialsBlock.${key}.review`)}
                    stars={stars}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div ref={paginationRef} className={classes.pagination} />
          </div>
        </div>
      </div>
    </>
  );
}
