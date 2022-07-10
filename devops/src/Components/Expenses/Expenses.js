import React from 'react';
import './Expenses.css';

import ExpenseItem from '../Expenses/ExpenseItem';

import Card from '../UI/Card';

const Expenses = (props) => {

    return(
          <div className='expenses'>
            <ExpenseItem    
                        Date={props.item[0].date} 
                        Title={props.item[0].title}
                        Amount={props.item[0].amount}/>
            
            <ExpenseItem 
                        Date={props.item[1].date} 
                        Title={props.item[1].title}
                        Amount={props.item[1].amount}/>
            <ExpenseItem 
                        Date={props.item[2].date} 
                        Title={props.item[2].title}
                        Amount={props.item[2].amount}/>
            <ExpenseItem 
                        Date={props.item[3].date} 
                        Title={props.item[3].title}
                        Amount={props.item[3].amount}/>
          </div>

    );
}

export default Expenses;
