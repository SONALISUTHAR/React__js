// Create a new component that is responsible for displaying expenses
// Add multiple ExpenseItem components in that component
// Keep the expenses data in the App component and pass that data into the newly created component


import React, {useState} from 'react'
import ExpenseItem  from "./ExpenseItem"
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props)=>{

  const [filterYear , setFilterYear] = useState('2019');

  //  const [filterInfoText , setfilterInfoText] = useState(' 2020,2021,2022,2023,2024') 
 
 // computing value , value is derived  based on state// 

 let filterInfoText = '2020,2021,2022,2023 & 2024'

  if(filterYear == '2019'){
    filterInfoText ='2020,2021,2022,2023 & 2024'
  } else if (filterYear === '2020'){
    filterInfoText ='2019,2021,2022,2023 & 2024'
  }else if (filterYear === '2021'){
    filterInfoText ='2019,2020,2022,2023 & 2024'
  }else if (filterYear === '2022'){
    filterInfoText ='2019,2020,2021,2023 & 2024'
  }else if (filterYear === '2023'){
    filterInfoText ='2019,2020,2021,2022 & 2024'
  }else{
    filterInfoText ='2019,2020,2021,2022 & 2023'
  }


  const filterChangeHandler = (selectYears) => {
    setFilterYear(selectYears)  ;
    // console.log('Selected year')
    // console.log(selectYears)

  }

return(

  <div>
   
    <Card className="expenses">
    
     <ExpensesFilter onChangeFilterYear={filterChangeHandler} selected={filterYear}/>

     <p>Information for years {filterInfoText} is hidden.</p>
     
       {
        props.item.map(
          expense => {
            <ExpenseItem title={expense.title}
            amount={ expense.amount} date={ expense.date}/>
          }
        )
        
       }

   <ExpenseItem title={props.item[0].title}
      // ExpenseItem title= {props.item[0].title}
      amount={props.item[0].amount} date={props.item[0].date}/>

      <ExpenseItem  title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}/>

      <ExpenseItem  title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}/>
      
      <ExpenseItem  title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date}/> 
       
    </Card>
    </div>
)
}
export default Expenses;
