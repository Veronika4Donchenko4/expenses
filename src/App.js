import Costs from "./components/costs/Costs";
import NewCost from "./components/CreateCost/newcost/NewCost";
import CostsFilter from "./components/costsfilter/CostsFilter";

function App() {
  const costs = [
    {
      id: 'c1',
      date: new Date (2021, 2, 12),
      description: "Freezer",
      amount: 999.99
    },
    {
      id: 'c2',
      date: new Date (2021, 11, 25),
      description: "MacBook",
      amount: 125
    },
    {
      id: 'c3',
      date: new Date (2021, 7, 12),
      description: "Airpods",
      amount: 545
    }
  ]
 const addCostHandler = (cost) => {
  console.log('App Component')
  console.log(cost); 
  // some comments
 }

//  it's a root component

  return (
      <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
      </div>
  );
}

export default App;
