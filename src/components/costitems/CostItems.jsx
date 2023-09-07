import React from 'react';
import styles from './CostItems.module.css'
import CostDate from '../costdate/CostDate';

const CostItems = (props) => {
  return (
    <div className={styles['cost-item']}>
      <CostDate date={props.date} />
      <div className={styles['cost-item__description']}>
        <h2>{props.description}</h2>
        <div className={styles['cost-item__price']}>{props.amount}$</div>
      </div>
     </div>
  ); 
}

export default CostItems;