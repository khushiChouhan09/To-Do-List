import  { useState }  from "react";
import './App.css'

function App() {
   const [task, settask] = useState('')
   const [taskList, settaskList] = useState([])

   const AddTask = () => {
    if (task.trim() === '') return

    const newTask = {
      text: task,
      completed: false,
    }

    settaskList([...taskList, newTask])
    settask('')
   }

    const DeleteTask = (index) => {
      const updatedList = taskList.filter((_, i) => i !== index)
      settaskList(updatedList)
    }

    const CompleteTask = (index) => {
      const updatedList = taskList.map((task, i) => i === index ? {...task, completed: !task.completed} : task)
      settaskList(updatedList)
    }
 
    
    return (
      
      <div className="App">

         <h1> TO-DO LIST </h1>

         <div> 
              <input 
               type="text" 
               value={task} 
               placeholder="Enter a task"
               onChange={(e) => settask(e.target.value)}
               />
              
               <button id="a1" onClick={AddTask}> Add </button>
         </div>

           <ul>
               {taskList.map((task, index) => (
                  <li key={index}>
                    
                     <span onClick={ () => CompleteTask(index)}
                        style={{
                           textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer'
                        }}
                        >
                     {task.text}
                     </span>
                    
                     <button id="a3" onClick={() => CompleteTask(index)}>
                             {task.completed ? 'Undo' : 'Complete'}
                     </button>
                     
                     <button id="a2" onClick={() => DeleteTask(index)}> Delete </button>
                     
                  </li>
               ))}
           </ul>
      </div>
      
     )
}

export default App