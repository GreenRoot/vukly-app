import {Link} from "react-router-dom";
import styles from "@/shared/soon-pages-styles/index.module.scss";
import training from "@/shared/img/training_vukly.png";

export const TrainingsPage = () => {
  return (
    <Link className={styles.body} to="/">
      <div>training</div>
      <img className={styles.img} src={training} alt=""/>
      <div>soon...</div>
    </Link>
  )
}
