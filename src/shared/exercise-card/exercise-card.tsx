import React from 'react';
import styles from './exercise-card.module.scss';

interface ExerciseCardProps {
  className?: string;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ className }) => {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.text}>trainings</div>
    </div>
  );
};

export default ExerciseCard;
