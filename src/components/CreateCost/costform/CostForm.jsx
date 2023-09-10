import { useState } from 'react';
import styles from './CostForm.module.css'


const CostForm = () => {

// With multistate 
const [name, setName] = useState('');
const [amount, setAmount] = useState('');
const [date, setDate] = useState('');

// With one object for several state
//  const [userInput, setUserInput] = useState({
//     name: '',
//     amount: '',
//     date: ''
//  });

const nameChangeHandler = (event) => {
    setName(event.target.value);
    // setUserInput({
    //         ...userInput,
    //         name: event.target.value
    // })

    // The best example
    //  of using state update
    //  while depending on the previous state 
    //  setUserInput((previousState) => {
    //     return {
    //         ...previousState,
    //         name: event.target.value
    //     }
    //  })
};

const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     amount: event.target.value 
    // })
};


const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     date: event.target.value 
    // })
}


    return (
        <form>
            <div className={styles["new-cost__controls"]}>
                <div className={styles["new-cost__control"]}>
                  <label>Title</label>
                  <input type="text" onChange={nameChangeHandler} />  
                </div>
            <div className={styles["new-cost__control"]}>
               <label>Summ</label>
               <input type="number" onChange={amountChangeHandler} />
            </div>
            <div className={styles["new-cost__control"]}>
                <label>Date</label>
                <input type="date" min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler} />
            </div>
            <div className={styles['new-cost__actions']}>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
        </form>
    )
  }
  export default CostForm;
  