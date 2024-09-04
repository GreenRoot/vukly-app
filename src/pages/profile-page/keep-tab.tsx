import styles from "./tab-content.module.scss";

export const KeepTab = () => {
  return (
    <div className={styles.tabContent}>
        <h2>Nutrition:</h2>
        <p>Maintain a balance of proteins, carbohydrates and fats, eat 3-5 times a day. Drink 2-3 liters of water, minimize processed foods and sugar.</p>
        <h2>Visit a psychologist:</h2>
        <p>Work on stress and emotional well-being. Set goals and stay motivated.</p>
        <h2>Daily routine:</h2>
        <p>Sleep 7-8 hours, go to bed and wake up at the same time. Start your day with morning exercises or a walk.</p>
        <h2>Workouts:</h2>
        <p>Workout 3-4 times a week, combining strength and cardio. Variety of exercises and include stretching.</p>
        <h2>Everyday activities:</h2>
        <p>Increase the number of steps and active household chores. Include physically active hobbies.</p>
        <h2>Life hacks:</h2>
        <p>Plan your meals and workouts, track your progress. Maintain healthy habits and positive thinking</p>
    </div>
  );
};