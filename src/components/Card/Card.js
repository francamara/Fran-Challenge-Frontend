import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Task from '../Task/Task'
import AddTask from '../AddTask/AddTask'

// const data = [
//   {
//     id: 1,
//     value:
//       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ducimus assumenda inventore enim aperiam in, nesciunt fugiat, blanditiis accusantium hic amet laboriosam corrupti cupiditate modi placeat alias eos perspiciatis. Voluptas?',
//     isChecked: false,
//   },
//   {
//     id: 2,
//     value:
//       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ducimus assumenda inventore enim aperiam in, nesciunt fugiat, blanditiis accusantium hic amet laboriosam corrupti cupiditate modi placeat alias eos perspiciatis. Voluptas? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores impedit aspernatur id reprehenderit commodi inventore et fugiat recusandae nam dolores. Amet, maxime similique nulla dignissimos saepe delectus optio quibusdam aut',
//     isChecked: false,
//   },
// ]

function Card() {
  // const [project, setProject] = useState([data])
  const [project, setProject] = useState([])

  useEffect(() => {
    async function getUser() {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?_start=1&_end=11'
      )
      setProject(response.data)
    }
    //   axios
    //     .get('https://jsonplaceholder.typicode.com/todos?_start=1&_end=11')
    //     .then((res) => setProject(res.data))
    getUser()
  }, [])

  const addTask = (value) => {
    const newProjectData = [...project, value]
    setProject(newProjectData)
  }

  return (
    <div className='App'>
      {project.map((input) => (
        <Task key={input.id} value={input.title} />
      ))}
      <AddTask addTask={addTask} currentTaskNumber={project.length} />
    </div>
  )
}

export default Card
