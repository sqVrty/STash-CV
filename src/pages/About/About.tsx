import { useRef } from "react";
import "animate.css";
import { useAppSelector } from "../../app/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import TextWithCircle from "../../components/textWithCircle/TextWithCircle";
import ServiceBlock from "./components/ServiceBlock";
import TestimonialsBlock from "./components/TestimonialsBlock";

import { COLORS } from "../../assets/colors";
import { AvatarPhoto } from "../../assets/img's";
import {
  ReactIcon,
  AppStoreIcon,
  BrushIcon,
  GitHubIcon,
} from "../../assets/svg's";

import classes from "./About.module.scss";

export default function About() {
  const isMobileDevice = useAppSelector(
    (state) => state.deviceInfo.isMobileDevice
  );

  const paginationRef = useRef(null);

  return isMobileDevice ? (
    <div
      className="mobileContent"
      style={{
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: 20,
      }}
    >
      <div className="mobileContentContainer"></div>
    </div>
  ) : (
    <div
      className={
        "content" +
        " animate__animated animate__slideInLeft animate__delay-0.7s"
      }
    >
      <div className="PCContentContainer">
        <div className={classes.heyContainer}>
          <TextWithCircle text="About Me" isFirst={true} />
          <p className={classes.greeting}>hey, there 👋</p>
          <p style={{ color: COLORS.gray }}>
            I'm Benjamin, a Software developer and Data scientist with over 8+
            years of experience, specialising in Java and React. Also I
            proficient at using tools and programming languages such as Python
            or SQL to manipulate and analyze data.
          </p>
          <div className={classes.aboutDataContainer}>
            <p className={classes.question}>
              AGE: <span className={classes.dots}>....</span>
              <span className={classes.answer} style={{ color: COLORS.gray }}>
                28
              </span>
            </p>
            <p className={classes.question}>
              LOCATION: <span className={classes.dots}>....</span>
              <span className={classes.answer} style={{ color: COLORS.gray }}>
                California, USA
              </span>
            </p>
            <p className={classes.question}>
              LANGUAGES: <span className={classes.dots}>....</span>
              <span className={classes.answer} style={{ color: COLORS.gray }}>
                English, Russian
              </span>
            </p>
            <p className={classes.question}>
              STACK: <span className={classes.dots}>....</span>
              <span className={classes.answer} style={{ color: COLORS.gray }}>
                React + TypeScript
              </span>
            </p>
          </div>
        </div>

        <TextWithCircle text="My Services" />
        <div className={classes.servicesGrid}>
          <div className={classes.crossContainer}>
            <ServiceBlock
              icon={<ReactIcon fill={COLORS.aqua} width={40} height={40} />}
              header="Web Development"
              desc="Modern and mobile-ready website that will help you reach all of your marketing."
            />
          </div>
          <div className={classes.crossContainer}>
            <ServiceBlock
              icon={<AppStoreIcon fill={COLORS.aqua} width={40} height={40} />}
              header="App Development"
              desc="End-to-end organization, ui/ux design, optimization, and maintenance of your mobile app project."
            />
          </div>
          <div className={classes.crossContainer}>
            <ServiceBlock
              icon={<BrushIcon fill={COLORS.aqua} width={40} height={40} />}
              header="UI/UX Design"
              desc="End-to-end organization, ui/ux design, optimization, and maintenance of your mobile app project."
            />
          </div>
          <div className={classes.crossContainer}>
            <ServiceBlock
              icon={<GitHubIcon fill={COLORS.aqua} width={40} height={40} />}
              header="Version Control"
              desc="Proficient in using version control systems like Git to manage codebase efficiently, facilitating collaboration and tracking changes across projects."
            />
          </div>
        </div>

        <TextWithCircle text="Testimonials" />
        <div className={classes.testimonials}>
          <Swiper
            slidesPerView={2}
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
                img={AvatarPhoto}
                name="Robert Chase"
                post="CEO"
                review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam numquam quod, illo quis eligendi nobis officiis voluptatum sed!"
                stars={4}
              />
            </SwiperSlide>
            <SwiperSlide className={classes.swiperSlide}>
              <TestimonialsBlock
                img={AvatarPhoto}
                name="Robert Chase"
                post="CEO"
                review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit nesciunt dolores commodi quibusdam reiciendis! Sequi corporis tenetur ut molestias ratione dolore adipisci neque a accusantium dolorem tempora nam saepe itaque commodi obcaecati non repellendus sint, vel quae, laborum sed laudantium laboriosam excepturi. Sint repudiandae ipsam repellat similique voluptatibus rerum."
                stars={4}
              />
            </SwiperSlide>
            <SwiperSlide className={classes.swiperSlide}>
              <TestimonialsBlock
                img={AvatarPhoto}
                name="Robert Chase"
                post="CEO"
                review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam numquam quod, illo quis eligendi nobis officiis voluptatum sed!"
                stars={4}
              />
            </SwiperSlide>
          </Swiper>
          <div ref={paginationRef} className={classes.pagination} />
        </div>

        <TextWithCircle text="Fun Facts" />
      </div>
    </div>
  );
}
