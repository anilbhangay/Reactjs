import React from 'react';

import './ExpenseItem.css';

import ExpenseDate from '../Expenses/ExpenseDate';

import Card from '../UI/Card';

const ExpenseItem = (props) => {



     return (

        <div className="expense-item">
        <ExpenseDate Date={new Date(props.Date)} />
        <div className="expense-item__description">
            <h2>{ props.Title }</h2>
             <div className="expense-item__price">${props.Amount}</div>
      </div>
         
        </div>   
     
  );
               
}

export default ExpenseItem; 