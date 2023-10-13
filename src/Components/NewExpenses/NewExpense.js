

import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const SaveExpensesDataHandler = (enteredExpensesData) => {
        
   
    const expensesData = {
        ...enteredExpensesData,
        id:Math.random().toString()
     }
    
     props.onAddExpense(expensesData);

    console.log(expensesData)
    }
    return(
    <div className="expense">
       
        <ExpenseForm onSaveExpensesData={SaveExpensesDataHandler}/>
    </div>
)
};

export default NewExpense;