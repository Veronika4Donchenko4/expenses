import styles from "./CostDate.module.css"

const CostDate = (props) => {
    const month = props.date.toLocaleString('en-EN', {
    month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-EN', {
    month: '2-digit'});
  return (
    <div className={styles['cost-date']}>
       <div>
        <div className={styles['cost-date__month']}>{month}</div>
        <div className={styles['cost-date__year']}>{year}</div>
        <div className={styles['cost-date__day']}>{day}</div>
      </div>
    </div>
  )
}

export default CostDate

