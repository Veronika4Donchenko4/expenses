import styles from './CostForm.module.css'

const CostForm = () => {
    return (
        <form>
            <div className={styles["new-cost__controls"]}>
                <div className={styles["new-cost__control"]}>
                  <label>Title</label>
                  <input type="text" />  
                </div>
            <div className={styles["new-cost__control"]}>
               <label>Summ</label>
               <input type="number" min='0.01' step='0.01'/>
            </div>
            <div className={styles["new-cost__control"]}>
                <label>Date</label>
                <input type="date" min='2019-01-01' step='2022-12-31'/>
            </div>
            <div className={styles['new-cost__actions']}>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
        </form>
    )
  }
  export default CostForm;
  