import { useState } from "react";
import CostItems from "../costitems/CostItems";
import styles from "./Costs.module.css";
import Card from '../UI/card/Card';
import CostsFilter from "../costsfilter/CostsFilter";


const Costs = (props) => {
    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHandler = (year) => {
        console.log(year)
        console.log('Costs Component')
        // setSelectedYear(year)
    }


  return (
        <div>
            <CostsFilter year={selectedYear} onChangeYear= {yearChangeHandler}/>
             <Card className={styles['costs']}>
                <h1>Hello React</h1>
                <CostItems
                date={props.costs[0].date}
                description={props.costs[0].description}
                amount={props.costs[0].amount}/>
                <CostItems
                date={props.costs[1].date}
                description={props.costs[1].description}
                amount={props.costs[1].amount}/>
                <CostItems
                date={props.costs[2].date}
                description={props.costs[2].description}
                amount={props.costs[2].amount}/>
        </Card>
        </div>
  )
}

export default Costs
