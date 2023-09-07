import CostItems from "./components/costitems/CostItems";


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
      <h1>Hello React</h1>
      <CostItems
      date={costs[0].date}
      description={costs[0].description}
      amount={costs[0].amount}/>
       <CostItems
      date={costs[1].date}
      description={costs[1].description}
      amount={costs[1].amount}/>
       <CostItems
      date={costs[2].date}
      description={costs[2].description}
      amount={costs[2].amount}/>
    </div>
  );
}

export default App;
