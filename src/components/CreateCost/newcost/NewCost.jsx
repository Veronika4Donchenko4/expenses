import CostForm from '../costform/CostForm';
import styles from './NewCost.module.css'

const NewCost = () => {
  return (
    <div className={styles['new-cost']}>
      <CostForm/>
    </div>
  )
}

export default  NewCost;
