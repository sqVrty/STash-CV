import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";
import "animate.css";
import { useViewport } from "../../providers/ViewportProvider";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import TextWithCircle from "../../components/textWithCircle/TextWithCircle";
import ServiceBlock from "./components/ServiceBlock";
import TestimonialsBlock from "./components/TestimonialsBlock";
import FactBlock from "./components/FactBlock";
import PhotoMobileContainer from "../../components/photoMobileContainer/PhotoMobileContainer";

import { COLORS } from "../../assets/colors";
import {
  GrigoriAvatar,
  LisichkinAvatar,
  PodelnikovAvatar,
} from "../../assets/images";
import {
  ReactIcon,
  AppStoreIcon,
  BrushIcon,
  GitHubIcon,
  DumbbellsIcon,
  ZapIcon,
  BricksIcon,
  HighSpeedTrainIcon,
} from "../../assets/icons";

import classes from "./About.module.scss";

export default function About() {
  const { t } = useTranslation();
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
            <p className={classes.greeting}>
              {t("aboutPage.aboutBlock.greeting")} 👋
            </p>
            <p
              style={{ color: COLORS.gray }}
              dangerouslySetInnerHTML={{
                __html: t("aboutPage.aboutBlock.desc"),
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

          <TextWithCircle text={t("aboutPage.servicesBlock.h")} />
          <div className={classes.servicesGrid}>
            <div className={classes.crossContainer}>
              <ServiceBlock
                icon={<ReactIcon fill={COLORS.aqua} width={40} height={40} />}
                header={t("aboutPage.servicesBlock.block1.h")}
                desc={t("aboutPage.servicesBlock.block1.desc")}
              />
            </div>
            <div className={classes.crossContainer}>
              <ServiceBlock
                icon={
                  <AppStoreIcon fill={COLORS.aqua} width={40} height={40} />
                }
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
              modules={[Pagination]}
              className={classes.swiper}
            >
              <SwiperSlide className={classes.swiperSlide}>
                <TestimonialsBlock
                  img={GrigoriAvatar}
                  name={t("aboutPage.testimonialsBlock.block1.name")}
                  post={t("aboutPage.testimonialsBlock.block1.post")}
                  review={t("aboutPage.testimonialsBlock.block1.review")}
                  stars={5}
                />
              </SwiperSlide>
              <SwiperSlide className={classes.swiperSlide}>
                <TestimonialsBlock
                  img={LisichkinAvatar}
                  name={t("aboutPage.testimonialsBlock.block2.name")}
                  post={t("aboutPage.testimonialsBlock.block2.post")}
                  review={t("aboutPage.testimonialsBlock.block2.review")}
                  stars={4}
                />
              </SwiperSlide>
              <SwiperSlide className={classes.swiperSlide}>
                <TestimonialsBlock
                  img={PodelnikovAvatar}
                  name={t("aboutPage.testimonialsBlock.block3.name")}
                  post={t("aboutPage.testimonialsBlock.block3.post")}
                  review={t("aboutPage.testimonialsBlock.block3.review")}
                  stars={5}
                />
              </SwiperSlide>
            </Swiper>
            <div ref={paginationRef} className={classes.pagination} />
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
                icon={<BricksIcon fill={COLORS.aqua} width={35} height={35} />}
                text={t("aboutPage.factsBlock.block2.h")}
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
                text={t("aboutPage.factsBlock.block3.h")}
              />
            </div>
            <div className={classes.delimiterContainer}>
              <FactBlock
                icon={
                  <DumbbellsIcon fill={COLORS.aqua} width={35} height={35} />
                }
                text={t("aboutPage.factsBlock.block4.h")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
