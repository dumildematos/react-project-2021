import {useState} from 'react';

import Header from './components/Header'
import Tasks from './components/Tasks';


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2.30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Appointment',
      day: 'Feb 5th at 2.30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Meeting ',
      day: 'Feb 5th at 2.30pm',
      reminder: true
    },
    {
      id: 4,
      text: 'Study',
      day: 'Feb 5th at 2.30pm',
      reminder: true
    }
  ]);

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>  task.id !== id ))
    console.log('Deleted ', id)
  }

  //Toggle reminder

  const toggleReminder = function(id){
    setTasks(
      tasks.map((task)=> 
        task.id === id ? { ...task, reminder: !task.reminder }: task
      )
    )
  }

  return (
    <div className="App">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks registred'}
    </div>
  );
}

export default App;
