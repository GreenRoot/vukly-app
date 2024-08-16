import InfoCard from '../../shared/info-card/info-card';
import ExerciseCard from '../../shared/exercise-card/exercise-card';
import MealsCard from "../../shared/meals-card/meals-card";
import LinkCard from "../../shared/link-card/link-card";
import styles from './main-page.module.scss';

function MainPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>vukly</header>

      <div className={styles.grid}>
        <LinkCard text="profile" className={styles.profileImg} />
        <InfoCard text="energy" className={styles.energyImg} value="8050" />
        <InfoCard text="coins" className={styles.coinsImg} value="10700" />
      </div>

      <div className={styles.content}></div>

      <div className={styles.gridMiddle}>
        <ExerciseCard className={styles.trainingImg}/>
        <div className={styles.gridColumn}>
          <LinkCard text="goals" className={styles.goalsImg} />
          <LinkCard text="rating" className={styles.ratingImg} />
        </div>
      </div>

      <div className={styles.grid}>
        <LinkCard text="journal" className={styles.journalImg} />
        <MealsCard text="meals" className={styles.mealsImg} />
      </div>
    </div>
  );
}

export default MainPage;
