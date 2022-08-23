import { useState } from "react";
import tasksData from "./Components/tasksData";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

function App() {
  // Tasks Data State
  const [tasks, setTasks] = useState(tasksData);

  //Show Task State
  const [showAddTask, setShowAddTask] = useState(false);

  // Toggle AddTask
  function toggleShowAddTask() {
    setShowAddTask((prevShowAddTask) => !prevShowAddTask);
  }

  // Delete Task
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));

  }

  // AddTask Function
  function addTask(newTask) {
    const id = Math.floor(Math.random() * 100) + 1;
    const updatedTask = { ...newTask, id };
    setTasks((prevTasks) => [...prevTasks, updatedTask]);
  }

  //   Toggle Reminder on DoubleClick
  function toggleReminder(id) {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
  }

  return (
    <div className="App bg-body">
      <div className="container overflow-y-auto sm:w-96">
        <Header
          showAddTask={showAddTask}
          toggleShowAddTask={toggleShowAddTask}
        />
        {showAddTask && <AddTask addTask={addTask} />}
       { tasks.length === 0 ? <h1 className="flex justify-center items-center w-full h-full text-lg text-teal-700">No Tasks Yet ! !</h1> : <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />}
      </div>
    </div>
  );
}

export default App;
