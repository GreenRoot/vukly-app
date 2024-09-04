import { useParams, Link } from "react-router-dom";
import styles from "./index.module.scss";

const workouts = [
    {
        id: 1,
        name: "Push-ups",
        target: "Target: Chest, shoulders, triceps.",
        img: 'training-01.webp',
        sets: [
            { reps: 15, rest: 30 },
            { reps: 13, rest: 45 },
            { reps: 10, rest: 60 },
        ]
    },
    {
        id: 2,
        name: "Plank with shoulder touch",
        target: "Target: Core, shoulders, back.",
        img: 'training-01.webp',
        sets: [
            { reps: 20, rest: 40 },
            { reps: 24, rest: 50 },
            { reps: 26, rest: 50 },
        ]
    },
    {
        id: 3,
        name: "Classic crunches",
        target: "Target: Abs.",
        img: 'training-01.webp',
        sets: [
            { reps: 18, rest: 40 },
            { reps: 20, rest: 50 },
            { reps: 24, rest: 50 },
        ]
    },
    {
        id: 4,
        name: "Straight arm plank",
        target: "Target: Core, shoulders, back.",
        img: 'training-01.webp',
        sets: [
            { reps: 30, rest: 20 },
            { reps: 35, rest: 30 },
            { reps: 40, rest: 30 },
        ]
    },
    {
        id: 5,
        name: "Lying leg raises",
        target: "Target: Abs.",
        img: 'training-01.webp',
        sets: [
            { reps: 16, rest: 40 },
            { reps: 18, rest: 50 },
            { reps: 20, rest: 50 },
        ]
    },
    {
        id: 6,
        name: "Bicycle crunches",
        target: "Target: Abs.",
        img: 'training-01.webp',
        sets: [
            { reps: 20, rest: 40 },
            { reps: 24, rest: 50 },
            { reps: 28, rest: 50 },
        ]
    },
    {
        id: 7,
        name: "Jumping up",
        target: "Target: Legs, glutes, core.",
        img: 'training-01.webp',
        sets: [
            { reps: 18, rest: 60 },
            { reps: 20, rest: 60 },
            { reps: 22, rest: 60 },
        ]
    },
    {
        id: 8,
        name: "Squats",
        target: "Target: Legs, glutes, core.",
        img: 'training-01.webp',
        sets: [
            { reps: 40, rest: 60 },
            { reps: 50, rest: 60 },
            { reps: 60, rest: 60 },]
    },
    {
        id: 9,
        name: "Forward and backward lunges",
        target: "Target: Legs, glutes, core.",
        img: 'training-01.webp',
        sets: [
            { reps: 20, rest: 60 },
            { reps: 24, rest: 60 },
            { reps: 30, rest: 60 },
        ]
    },
    {
        id: 10,
        name: "Glute bridge",
        target: "Target: Glutes, core.",
        img: 'training-01.webp',
        sets: [
            { reps: 30, rest: 60 },
            { reps: 34, rest: 60 },
            { reps: 36, rest: 60 },
        ]
    },
    {
        id: 11,
        name: "Stepping onto a chair",
        target: "Target: Legs, glutes, core.",
        img: 'training-01.webp',
        sets: [
            { reps: 20, rest: 40 },
            { reps: 22, rest: 50 },
            { reps: 24, rest: 50 },
        ]
    },
    {
        id: 12,
        name: "Deadlift on one leg",
        target: "Target: Legs, glutes, core.",
        img: 'training-01.webp',
        sets: [
            { reps: 16, rest: 40 },
            { reps: 18, rest: 50 },
            { reps: 20, rest: 60 },
        ]
    },
]


export const TrainingPage = () => {
    const { id } = useParams();
    const workout = workouts.find(w => w.id === Number(id));
  
    if (!workout) {
      return <div>Тренировка не найдена</div>;
    }
  
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{workout.name}</h1>
        <div className={styles.exercise}>
          <img src={`/img/${workout.img}`} alt={workout.name} className={styles.exerciseImage} />
          <p className={styles.exerciseTarget}>{workout.target}</p>
          <ul className={styles.setsList}>
            {workout.sets.map((set, setIndex) => (
              <li key={setIndex} className={styles.set}>
                <div className={styles.setNumber}>
                  <div className={styles.setNumberText}>{setIndex + 1} set</div>
                  <div className={styles.setNumberText}>{set.reps} reps</div>
                </div>
                <div className={styles.setRest}>rest {set.rest} sec</div>
              </li>
            ))}
          </ul>
          <Link to="/" className={styles.finishButton}>FINISH</Link>
        </div>
      </div>
    );
  };
