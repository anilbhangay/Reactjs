import React, {useState, useEffect} from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

  let DUMMY_EXPENSE = []; 

const App = () => {
   
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    useEffect(() =>{
      
     fetch('https://api.sampleapis.com/typer/welcomeQuestions').then(
      response => {
       return response.json();
      }
    ).then(
      data => {
    //  console.log(data);
     setExpenses(data);
      }
   );

   },[]);

       const addExpenseHandler = (expense) => {
           const updatedExpense = [expense, ...expenses];
           setExpenses(updatedExpense);
       };
    
          return ( 
           <div>
                 <NewExpense onAddExpense ={addExpenseHandler} />
                    
                  <Expenses item={expenses} />
          </div>
  );
   }

export default App;