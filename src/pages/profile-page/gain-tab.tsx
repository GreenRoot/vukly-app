import styles from "./tab-content.module.scss";

export const GainTab = () => {
    return (
      <div className={styles.tabContent}>
      <h2>Nutrition:</h2>
      <p>Caloric surplus: Increase calories by 10-20%. Proteins and carbohydrates: Eat more proteins and complex carbohydrates, eat 5-6 times a day.</p>
      <h2>Visit a psychologist: Support:</h2>
      <p>Support: Work with a psychologist to improve your attitude towards food and self-confidence. Motivation: Set positive goals related to weight gain.</p>
      <h2>Daily routine:</h2>
      <p>Sleep: Sleep 7-8 hours, follow a routine. Planning: Include time for relaxation and recovery.</p>
      <h2>Workouts:</h2>
      <p>Strength training: Work out 3-4 times a week, focusing on gaining muscle mass. Limited cardio: Minimize cardio to conserve calories.</p>
      <h2>Everyday activity:</h2>
      <p>Moderation: Don't overexert yourself, rest more. Light active rest: Choose walks and light activities.</p>
      <h2>Lifehacks:</h2>
      <p>Calorie-rich snacks: Keep nuts and dried fruit on hand. Gradual: Increase weight and food volume gradually. Track your progress: Set realistic goals and reward yourself for success.</p>
    </div>
  );
};
