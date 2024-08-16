import React from 'react';
import styles from './info-card.module.scss';

interface InfoCardProps {
  text: string;
  value?: string;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ text, value, className }) => {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.value}>{value}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default InfoCard;
