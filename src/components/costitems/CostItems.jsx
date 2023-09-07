import React from 'react';
import styles from './CostItems.module.css'

const CostItems = () => {

  const costDate = new Date (2021, 2, 12);
  const costDescription = "Freezer";
  const costAmount = 999.99;

  return (
    <div className={styles['cost-item']}>
      <div>{costDate.toISOString()}</div>
      <div className={styles['cost-item__description']}>
        <h2>{costDescription}</h2>
        <div className={styles['cost-item__price']}>{costAmount}$</div>
      </div>
     </div>
  ); 
}

export default CostItems;