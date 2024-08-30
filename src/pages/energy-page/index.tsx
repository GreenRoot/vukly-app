import {Link} from "react-router-dom";
import styles from "@/shared/soon-pages-styles/index.module.scss";
import energy from "@/shared/img/energy_vukly.webp";

export const EnergyPage = () => {
  return (
    <Link className={styles.body} to="/">
      <div>energy</div>
      <img className={styles.img} src={energy} alt=""/>
      <div>soon...</div>
    </Link>
  )
}
