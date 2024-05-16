import { COLORS } from "../../../../public/assets/colors";
import { QuotationMarksIcon, StarIcon } from "../../../../public/assets/svg's";

import classes from "./TestimonialsBlock.module.scss";

export default function TestimonialsBlock({
  img,
  name,
  post,
  review,
  stars,
}: {
  img: string;
  name: string;
  post: string;
  review: string;
  stars: number;
}) {
  const starIcons = [];

  for (let i = 0; i < 5; i++) {
    starIcons.push(
      <StarIcon
        key={i}
        fill={i < stars ? COLORS.aqua : "none"}
        stroke={COLORS.aqua}
        width={18}
        height={18}
      />
    );
  }

  return (
    <div className={classes.container}>
      <img className={classes.image} src={img} />
      <div className={classes.infoContainer}>
        <h1 className={classes.name}>{name}</h1>
        <p className={classes.post} style={{ color: COLORS.gray }}>
          {post}
        </p>
      </div>
      <div className={classes.descContainer}>
        <p className={classes.desc} style={{ color: COLORS.gray }}>
          {review}
        </p>
        <div className={classes.quotationMarks} style={{ color: COLORS.gray }}>
          <QuotationMarksIcon fill={COLORS.gray} width={16} height={16} />
        </div>
      </div>
      <div className={classes.starsRatingContainer}>{starIcons}</div>
    </div>
  );
}
