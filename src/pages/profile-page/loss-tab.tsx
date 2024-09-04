import styles from "./tab-content.module.scss";

export const LossTab = () => {
  return (
    <div className={styles.tabContent}>
        <h2>Nutrition:</h2>
        <p>Cut calories by 10-20%, focus on proteins, complex carbohydrates and healthy fats. Eat 4-5 times a day, avoid sugar and fast food, drink 2-3 liters of water.</p>
        <h2>Visit a psychologist:</h2>
        <p>Work with a psychologist to eliminate emotional overeating and support motivation. Learn stress management techniques and set achievable goals.</p>
        <h2>Daily routine:</h2>
        <p>Go to bed and wake up at the same time, aim for 7-8 hours of sleep. Include morning exercises and plan time for training.</p>
        <h2>Workouts:</h2>
        <p>Work out 4-5 times a week, combining strength and cardio exercises. Do full-body exercises and stretching to improve flexibility.</p>
        <h2>Everyday activities:</h2>
        <p>Increase the number of steps, use the stairs, add active hobbies.</p>
        <h2>Lifehacks:</h2>
        <p>Track your progress, control portions, stay motivated by achieving small goals.</p>
    </div>
  );
};