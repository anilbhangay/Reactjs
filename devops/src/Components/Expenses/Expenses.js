import React from 'react';
import './Expenses.css';

import ExpenseItem from '../Expenses/ExpenseItem';

import Card from '../UI/Card';

const Expenses = (props) => {

    return(
          <div className="expenses">
             {
              props.item.map(
                expense => (    
           <ExpenseItem    
              Date={expense.date} 
              Title={expense.title}
              Amount={expense.amount}/>

                )
              )
             }
       </div>
    );
}

export default Expenses;
