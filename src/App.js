import Costs from "./components/costs/Costs";
import NewCost from "./components/CreateCost/newcost/NewCost";

function App() {
  const costs = [
    {
      date: new Date (2021, 2, 12),
      description: "Freezer",
      amount: 999.99
    },
    {
      date: new Date (2021, 11, 25),
      description: "MacBook",
      amount: 125
    },
    {
      date: new Date (2021, 7, 12),
      description: "Airpods",
      amount: 545
    }
  ]
  return (
      <div>
        <NewCost/>
      <Costs costs={costs}/>
      </div>
  );
}

export default App;
