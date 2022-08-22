import { useState } from "react";
import tasksData from "./Components/tasksData";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

function App() {
  // Tasks Data State
  const [tasks, setTasks] = useState(tasksData);

  //Add Task State
  const [showAddTask, setShowAddTask] = useState(false);

  // Toggle Add Task
  function toggleShowAddTask() {
    setShowAddTask((prevShowAddTask) => !prevShowAddTask);
  }

  // Delete Task
  function deleteTask(id) {
    // setTasks((prevTask) => prevTask.filter(task => task.id !== id));
   setTasks( tasks.filter((task) => task.id !== id));
 
    console.log("deleted", id);
  }

   let mammed = tasks.filter(task => task.id !== 3)
   console.log(mammed);

  return (
    <div className="App bg-body">
      <div className="container">
        <Header
          showAddTask={showAddTask}
          toggleShowAddTask={toggleShowAddTask}
        />
        {showAddTask && <AddTask />}
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
