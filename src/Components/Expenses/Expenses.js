// Create a new component that is responsible for displaying expenses
// Add multiple ExpenseItem components in that component
// Keep the expenses data in the App component and pass that data into the newly created component


import React, {useState} from 'react'

import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [filterYear , setFilterYear] = useState('2019');

  const filterChangeHandler = (selectYears) => {
    setFilterYear(selectYears);
    // console.log('Selected year')
    // console.log(selectYears)

 }

const filterExpenses = props.item.filter(expense => {
  return expense.date.getFullYear().toString() === filterYear;
});


return (

  <div>
   
    <Card className="expenses">
    
     <ExpensesFilter onChangeFilterYear={filterChangeHandler} selected={filterYear}/>
      <ExpensesChart expense={filterExpenses}/>
     <ExpenseList item={filterExpenses}/>
  
    </Card>
    </div>
 )
 }
export default Expenses;
