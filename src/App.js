import './App.css';
import React, {useState} from 'react';
import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpenses/NewExpense';


const DUMMY_DATA = [
  { id: 'e1' , title:'Car Insurance', amount: 250.00 , date: new Date(2021,22,4)},
  {id: 'e2' ,title:'Furniture', amount: 300.00 , date: new Date(2023,2,5)},
  {id: 'e3' ,title:'Medical Insurance', amount: 599.00 , date: new Date(2020,20,8)},
  {id: 'e4' ,title:' New Laptop ', amount: 850.00 , date: new Date(2021,11,3)},
];



const App = () => {
  
 const [expenses , setExpenses] = useState(DUMMY_DATA)

  const addExpensesHandler = (expense) => {
   setExpenses((prevExpenses) => {
    return [expense , ...prevExpenses];
   });
   
  };

  
  return (
    <div className="App">
      <h1>Expenses</h1>
      <NewExpense onAddExpense={addExpensesHandler}/>
      <Expenses item={expenses}/>
    </div>

  );
}

export default App;
