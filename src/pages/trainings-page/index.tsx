import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import TrainingIcon from "@/shared/img/training_vukly.webp"

const trainings = [
  { id: 1, title: "Push-ups" },
  { id: 2, title: "Plank with shoulder touch" },
  { id: 3, title: "Classic crunches" },
  { id: 4, title: "Straight arm plank" },
  { id: 5, title: "Lying leg raises" },
  { id: 6, title: "Bicycle crunches" },
  { id: 7, title: "Jumping up" },
  { id: 8, title: "Squats" },
  { id: 9, title: "Forward and backward lunges" },
  { id: 10, title: "Glute bridge" },
  { id: 11, title: "Stepping onto a chair" },
  { id: 12, title: "Deadlift on one leg" },
];

export const TrainingsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>trainings</h1>
      <img src={TrainingIcon} alt="Training" className={styles.trainingIcon} />
      <ul className={styles.trainingList}>
        {trainings.map((training) => (
          <li key={training.id} className={styles.trainingItem}>
            <Link to={`/trainings/${training.id}`} className={styles.trainingLink}>
              <span className={styles.trainingTitle}>{training.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/" className={styles.backLink}>Home</Link>
    </div>
  );
};
