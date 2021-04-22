import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Caramelo Web Agency',
        day: '21 de Abril de 2021',
        reminder: 'true',
    },
    {
        id: 2,
        text: 'Caramelo Agency WEB',
        day: '21 de Maio de 2021',
        reminder: 'true',
    },
    {
        id: 3,
        text: 'Caramelo Web Apps',
        day: '21 de Outubro de 2021',
        reminder: 'true',
    },
    {
        id: 4,
        text: 'Caramelo Agency Apps',
        day: '21 de Abril de 2022',
        reminder: 'true',
    },
    {
        id: 5,
        text: 'Caramelo Apps',
        day: '21 de Junho de 2023',
        reminder: 'false',
    }
])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />)
          :
          ('Sem massgens')}
    </div>
  );
}

export default App;
