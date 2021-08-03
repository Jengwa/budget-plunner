import React, { useState } from 'react'

 const EditBudget = (props) => {
   const [value,setValue] = useState(props.budget)
  return (
    <div>
      <input
        required='required'
        type='number'
        className='form-control mr-3'
        id='name'
        value={value}
        onChange={(event) => setValue(event.target.value)}
    />
      <button
      type='button'
      className='btn btn-primary'
      onClick={() => props.handleSaveClick(value)}
      >
        SAVE BUDGET
      </button>
    </div>
  )
}
 export default EditBudget;