import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css"
import Card from '../UI/Card'

const ExpenseItem = (props) => {
   
   const [title , setTitle] = useState(props.title);
   
   
  // let title = props.title;
 
  const clickedHandler = () => {
    // title = 'Updated!';
    setTitle('UPDATED..!');
    console.log(title)
  }
    //object constructor
    // const expenseDate = new Date(2023,28,4);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 250.00;

return (

          <Card className='expense-item'>
           <ExpenseDate date={props.date}/>
            
          <div className='expense-item__description'> 
            <h2> {title} </h2>

            <div className='expense-item__price'>${props.amount}</div>
          </div>
          <button onClick={clickedHandler}> Change </button>
         </Card>
  );
}

export default ExpenseItem;