import React, { useState } from 'react'

function AddTask(props) {
  const [value, setValue] = useState('')
  const handleClick = () => {
    const task = {
      id: props.currentTaskNumber + 2,
      title: value,
      completed: false,
    }
    props.addTask(task)
    setValue('')
  }
  return (
    <div className='w-3/4 bg-gray-200 rounded-md flex justify-start items-center m-auto my-3 p-4 r'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5 hover:bg-green-500 rounded-full cursor-pointe'
        onClick={handleClick}
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
          clipRule='evenodd'
        />
      </svg>
      <div className='w-full select-nonerounded-md p-4'>
        <textarea
          type='text'
          placeholder='Add a new task...'
          className='w-full p-2 rounded-md'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default AddTask
