import styles from './CostItems.module.css'
import CostDate from '../costdate/CostDate';
import Card from '../card/Card'

const CostItems = (props) => {
  return (
    <Card className={styles['cost-item']}>
      <CostDate date={props.date} />
      <div className={styles['cost-item__description']}>
        <h2>{props.description}</h2>
        <div className={styles['cost-item__price']}>{props.amount}$</div>
      </div>
     </Card>
  ); 
}

export default CostItems;