import Typography from "../Typography";
import styles from "./FooterSection.module.css";

type FooterSectionProps = {
  readonly title: string;
  readonly items: string[];
};

export default function FooterSection({
  title,
  items,
  ...props
}: FooterSectionProps) {
  return (
    <div className={styles.section} {...props}>
      <Typography variantStyle="body-large-bold">{title}</Typography>
      <ul>
        {items.map((item) => (
          <li key={`footer-item-${item}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
