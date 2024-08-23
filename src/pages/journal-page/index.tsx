import {Link} from "react-router-dom";
import styles from "@/shared/soon-pages-styles/index.module.scss";
import journal from "@/shared/img/journal_vukly.png";

export const JournalPage = () => {
  return (
    <Link className={styles.body} to="/">
      <div>journal</div>
      <img className={styles.img} src={journal} alt=""/>
      <div>soon...</div>
    </Link>
  )
}
