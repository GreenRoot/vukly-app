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
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
        ]
    },
    {
        id: 2,
        name: "Plank with shoulder touch",
        target: "Target: Core, shoulders, back.",
        img: 'training-01.webp',
        sets: [
            { reps: 30, rest: 30 },
            { reps: 30, rest: 30 },
            { reps: 30, rest: 30 },
        ]
    },
    {
        id: 3,
        name: "Classic crunches",
        target: "Target: Abs.",
        img: 'training-01.webp',
        sets: [
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
        ]
    },
    {
        id: 4,
        name: "Straight arm plank",
        target: "Target: Core, shoulders, back.",
        img: 'training-01.webp',
        sets: [
            { reps: 30, rest: 30 },
            { reps: 30, rest: 30 },
            { reps: 30, rest: 30 },
        ]
    },
    {
        id: 5,
        name: "Lying leg raises",
        target: "Target: Abs.",
        img: 'training-01.webp',
        sets: [
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
        ]
    },
    {
        id: 6,
        name: "Bicycle crunches",
        target: "Target: Abs.",
        img: 'training-01.webp',
        sets: [
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
        ]
    },
    {
        id: 7,
        name: "Jumping up",
        target: "Target: Legs, glutes, core.",
        img: 'training-01.webp',
        sets: [
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
        ]
    },
    {
        id: 8,
        name: "Squats",
        target: "Target: Legs, glutes, core.",
        img: 'training-01.webp',
        sets: [
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },]
    },
    {
        id: 9,
        name: "Forward and backward lunges",
        target: "Target: Legs, glutes, core.",
        img: 'training-01.webp',
        sets: [
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
        ]
    },
    {
        id: 10,
        name: "Glute bridge",
        target: "Target: Glutes, core.",
        img: 'training-01.webp',
        sets: [
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
        ]
    },
    {
        id: 11,
        name: "Stepping onto a chair",
        target: "Target: Legs, glutes, core.",
        img: 'training-01.webp',
        sets: [
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
        ]
    },
    {
        id: 12,
        name: "Deadlift on one leg",
        target: "Target: Legs, glutes, core.",
        img: 'training-01.webp',
        sets: [
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
            { reps: 15, rest: 30 },
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
          <p className={styles.exerciseTarget}>{workout.target}</p>
          <img src={`/img/${workout.img}`} alt={workout.name} className={styles.exerciseImage} />
          <ul className={styles.setsList}>
            {workout.sets.map((set, setIndex) => (
              <li key={setIndex} className={styles.set}>
                Set {setIndex + 1}: {set.reps} Resp / {set.rest} sec
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className={styles.finishButton}>FINISH</Link>
      </div>
    );
  };
