import CostForm from '../costform/CostForm';
import styles from './NewCost.module.css'


// data processing variable
const NewCost = (props) => {

    const saveCostDataHandler = (inputCostData) => {

    const costData ={
        ...inputCostData,
        id: Math.random().toString()
    }
       props.onAddCost(costData);
    }

  return (
    <div className={styles['new-cost']}>
      <CostForm onSaveCostData={saveCostDataHandler}/>
    </div>
  )
}

export default  NewCost;
