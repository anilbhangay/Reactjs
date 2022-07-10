import React from "react";
import Expenses from "./Components/Expenses/Expenses";

const App = () => {
    let expenses = [
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
return (
           <div>
            <h2>Information of Expenses</h2>
                  <hr></hr>
                  <Expenses item={expenses}/>
          </div>
 );
}

export default App;