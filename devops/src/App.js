import React, {useState} from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

  let DUMMY_EXPENSE = [
    {
     id : 'a1',
     title : 'Institution Fee',
     amount : 400,
     date : new Date(2022, 5 ,30)
    },
    {
        id : 'a2',
        title : 'Books Bill ',
        amount : 250,
        date : new Date(2022, 6 ,5)
       },
       {
        id : 'a3',
        title : 'House Rent',
        amount : 1000,
        date : new Date(2022, 7 ,10)
       },
       {
        id : 'a4',
        title : 'Food Charges',
        amount : 600,
        date : new Date(2022, 5 , 14),
       }
     ]; 

const App = () => {
   
    const [expenses, setExpenses] = useState( DUMMY_EXPENSE);

       const addExpenseHandler = (expense) => {
              const updatedExpense = [expense, ...expenses];
           setExpenses(updatedExpense);
       };
    
           return (
           <div>
           
                    <NewExpense onAddExpense = {addExpenseHandler} />
                    
                  <Expenses item={expenses}/>
          </div>
 );
}

export default App;