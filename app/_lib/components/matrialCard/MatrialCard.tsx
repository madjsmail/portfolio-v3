import React from 'react';
import styles from './matrialCard.module.css';

const MaterialCard = ({ href, imageUrl, title, description }) => {
  return (
    <a className={styles.materialCard} href={href}>
      <img className={styles.cardPicture} src={imageUrl} alt="Card" />
      <div className={styles.cardInfo}>
        <h4 className={styles.cardTitle}>{title}</h4>
        <p className={styles.cardDesc}>{description}</p>
      </div>
    </a>
  );
};

export default MaterialCard;