import {Link} from "react-router-dom";
import styles from "@/shared/soon-pages-styles/index.module.scss";
import rating from "@/shared/img/rating_vukly.webp";

export const RatingPage = () => {
  return (
    <Link className={styles.body} to="/">
      <div>rating</div>
      <img className={styles.img} src={rating} alt=""/>
      <div>soon...</div>
    </Link>
  )
}
