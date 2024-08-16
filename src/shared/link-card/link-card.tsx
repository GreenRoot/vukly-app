import React from 'react';
import styles from './link-card.module.scss';

interface LinkCardProps {
  text: string;
  value?: string;
  className?: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ text, className }) => {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default LinkCard;
