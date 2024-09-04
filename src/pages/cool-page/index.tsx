import {Link} from "react-router-dom";
import styles from "@/shared/soon-pages-styles/index.module.scss";
import cool from "@/shared/img/cool_vukly.webp";

export const CoolPage = () => {
  return (
    <Link className={styles.body} to="/">
      <div>cool!</div>
      <img className={styles.img} src={cool} alt="cool"/>
      <div>
        <div>you did it!</div>
        <div>great job!</div>
      </div>
    </Link>
  )
}
