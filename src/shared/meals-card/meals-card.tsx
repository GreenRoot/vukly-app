import React from 'react';
import styles from './meals-card.module.scss';

interface MealsCardProps {
  text: string;
  value?: string;
  className?: string;
}

const MealsCard: React.FC<MealsCardProps> = ({ text, className }) => {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default MealsCard;
