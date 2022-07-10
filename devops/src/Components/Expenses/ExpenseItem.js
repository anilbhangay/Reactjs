import React, { useState } from 'react';

import './ExpenseItem.css';

import ExpenseDate from '../Expenses/ExpenseDate';

import Card from '../UI/Card';

const ExpenseItem = (props) => {

  const [newTitle, setNewTitle] = useState("");
    
   const [Title, setTitle] = useState(props.Title);

    const clickHandler = () =>{
         setTitle('New Title..');
    }
        

     return (

        <div className="expense-item">
        <ExpenseDate Date={props.Date} />
        <div className="expense-item__description">
            <h2>{ Title }</h2>
             <div className="expense-item__price">${props.Amount}</div>
      </div>
          <input type= "text" value= "newTitle" />
            <button onClick={clickHandler}>Change Title</button>
        </div>   
     
  );
               
}

export default ExpenseItem; 