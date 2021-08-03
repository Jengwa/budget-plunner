import React, {useContext, useState, useEffect} from 'react';
import ExpenseItems from './ExpenseItems';
import {AppContext} from '../contexts/AppContext';


const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

  useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

  const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

 
  return (
    <div>
      <input
          type='text'
          className='form-control mb-2 mr-sm-2'
          placeholder='search expenses...'
          onChange={handleChange}
        />
      <ul>
        {
          filteredExpenses.map((expense) => (
            <ExpenseItems 
              id={expense.id} 
              key={expense.id} 
              name={expense.name} 
              cost={expense.cost}
            />
          ))
        }
        
      </ul>
    </div>
  )
}
export default ExpenseList;