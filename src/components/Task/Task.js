import React, { useState } from 'react'

function Task(props) {
  const [checked, isChecked] = useState(false)
  return (
    <div className='w-3/4 bg-gray-200 rounded-md flex justify-start items-center m-auto my-3 p-4'>
      <input
        type='checkbox'
        name='Task'
        checked={checked}
        value={props.value}
        onChange={() => isChecked(!checked)}
        id=''
        className='bg-white flex justify-center items-center mr-5'
      />
      <span
        htmlFor='task'
        style={{ textDecoration: checked ? 'line-through' : '' }}
        className='select-none rounded-md p-4'
      >
        {props.value}
      </span>
    </div>
  )
}

export default Task
