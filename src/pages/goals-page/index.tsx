import {Link} from "react-router-dom";
import styles from "@/shared/soon-pages-styles/index.module.scss";
import goals from "@/shared/img/goals_vukly.webp";

export const GoalsPage = () => {
  return (
    <Link className={styles.body} to="/">
      <div>goals</div>
      <img className={styles.img} src={goals} alt=""/>
      <div>soon...</div>
    </Link>
  )
}
