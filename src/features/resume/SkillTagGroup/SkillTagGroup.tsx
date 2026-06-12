import classes from "./SkillTagGroup.module.scss";

export default function SkillTagGroup({
  title,
  tags,
}: {
  title: string;
  tags: string[];
}) {
  return (
    <div className={classes.group}>
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.tags}>
        {tags.map((tag) => (
          <span className={classes.tag} key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
