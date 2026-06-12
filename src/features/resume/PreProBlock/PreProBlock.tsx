import classes from "./PreProBlock.module.scss";

interface PreProItem {
  post: string;
  cpName: string;
  period: string;
  stack: string;
}

export default function PreProBlock({
  title,
  items,
}: {
  title: string;
  items: PreProItem[];
}) {
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>{title}</p>
      <div className={classes.list}>
        {items.map((item) => (
          <div className={classes.item} key={item.post}>
            <div className={classes.headerRow}>
              <p className={classes.role}>
                <span className={classes.post}>{item.post}</span>
                <span className={classes.sep}> · </span>
                <span className={classes.cpName}>{item.cpName}</span>
              </p>
              <span className={classes.period}>{item.period}</span>
            </div>
            <p className={classes.stack}>Stack: {item.stack}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
