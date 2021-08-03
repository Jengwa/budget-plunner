import React, {useContext ,useState } from 'react';
import {AppContext} from '../contexts/AppContext';
import { v4 as uuidv4 } from 'uuid';
import {db} from '../firebase';

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext)
  const [name,setName] = useState('');
  const [cost,setCost] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();

    db.collection('expenses').add({
      name: name,
      cost: cost
    }).then(() => {
      alert('the expense has been added');
    })
    .catch((error) => {
      console.log(error.messege)
    })

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
      
    }

    dispatch({
      type:'ADD_EXPENSE',
      payload: expense
    })
    setName('')
    setCost('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className='row'>
       <div className= 'col-sm'>
          <label >Name</label>
          <input 
            className='form-control'
            id='name'
            required='required'
            type='text'
            value={name}
            onChange={(event)=> setName(event.target.value)}
          />
       </div>
        <div className= 'col-sm'>
          <label >Cost</label>
          <input 
            className='form-control'
            id='cost'
            required='required'
            type='text'
            value={cost}
            onChange={(event)=> setCost(event.target.value)}
          />
        </div>
      </div>
      <div className='row'>
          <div className='col-sm'>
            <button type='submit' className='btn btn-primary mt-3'>Add Expense</button>
          </div>
      </div>

    </form>
  )
}

export default AddExpenseForm;