import {Link} from "react-router-dom";
import styles from "@/shared/soon-pages-styles/index.module.scss";
import coins from '@/shared/img/coins_vukly.webp'

export const CoinsPage = () => {
  return (
    <Link className={styles.body} to="/">
      <div>coins</div>
      <img className={styles.img} src={coins} alt=""/>
      <div>soon...</div>
    </Link>
  )
}
