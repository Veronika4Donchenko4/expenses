import { useState } from 'react';
import styles from './CostForm.module.css'


const CostForm = (props) => {

const [inputName, setInputName] = useState('');
const [inputAmount, setInputAmount] = useState('');
const [inputDate, setInputDate] = useState('');

const nameChangeHandler = (event) => {
    setInputName(event.target.value);
};

const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
};

const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
}

const submitHandler = (event) => {
    event.preventDefault();

// data processing variable
    const costData = {
        name: inputName,
        amount: inputAmount,
        date: new Date(inputDate),
    }

    props.onSaveCostData(costData);
    setInputAmount('');
    setInputDate('');
    setInputName('');
};

    return (
        <form onSubmit={submitHandler}>
            <div className={styles["new-cost__controls"]}>
                <div className={styles["new-cost__control"]}>
                  <label>Title</label>
                  <input type="text" value ={inputName} onChange={nameChangeHandler} />  
                </div>
            <div className={styles["new-cost__control"]}>
               <label>Summ</label>
               <input type="number" value ={inputAmount} onChange={amountChangeHandler} />
            </div>
            <div className={styles["new-cost__control"]}>
                <label>Date</label>
                <input type="date" value ={inputDate} min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler} />
            </div>
            <div className={styles['new-cost__actions']}>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
        </form>
    )
  }
  export default CostForm;
  