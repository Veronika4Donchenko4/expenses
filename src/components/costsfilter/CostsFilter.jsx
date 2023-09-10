import styles from './CostsFilter.module.css'

const CostsFilter = (props) => {
    const yearChangeHandler = (e)  => {
        props.onChangeYear(e.target.value)
    };
    
return (
    <div className={styles['costs-filter']}>
        <div className={styles['costs-filter__control']}>
        <label>Filter by year</label>
        <select value={props.year} onChange={yearChangeHandler}>
            <option value="2023">2023</option>
            <option value="2023">2022</option>
            <option value="2023">2021</option>
            <option value="2023">2020</option>
        </select>
        </div>
    </div>
  )
}

export default CostsFilter
