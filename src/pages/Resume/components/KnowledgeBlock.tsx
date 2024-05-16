import { CheckIcon } from "../../../../public/assets/svg's";

import { COLORS } from "../../../../public/assets/colors";

import classes from "./KnowledgeBlock.module.scss";

export default function KnowledgeBlock({ text }: { text: string }) {
  return (
    <div className={classes.container}>
      <div className={classes.checkIconContainer}>
        <CheckIcon
          fill={COLORS.aqua}
          stroke={COLORS.aqua}
          width={18}
          height={18}
        />
      </div>
      <p className={classes.text}>{text}</p>
    </div>
  );
}
