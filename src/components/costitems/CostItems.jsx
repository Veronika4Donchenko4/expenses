import styles from './CostItems.module.css'
import CostDate from '../costdate/CostDate';
import Card from '../UI/card/Card';
import { useState } from "react";

const CostItems = (props) => {
 const [description, setDescription] = 
 useState(props.description);
//  console.log('TExt in component defenition')

 const changeDescriptionHandler = () => {
    setDescription('New cost');
  }
  
  return (
    <Card className={styles['cost-item']}>
      <CostDate date={props.date} />
      <div className={styles['cost-item__description']}>
        <h2>{description}</h2>
        <div className={styles['cost-item__price']}>{props.amount}$</div>
      </div>
      <button onClick={changeDescriptionHandler}>Change description</button>
     </Card>
  ); 
}

export default CostItems;

