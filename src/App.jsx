import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      text: "Gym",
      day_time: "Saturday@5:00 PM",
      reminder: true,
    },

    {
      id: 2,
      text: "Dispose Trash",
      day_time: "Saturday@ 11:00 AM",
      reminder: false,
    },

    {
      id: 3,
      text: "Call Dad",
      day_time: "Tuesday@ 01:15 PM",
      reminder: false,
    },

    {
      id: 4,
      text: "Laundry",
      day_time: "Thursday@ 07:00 AM",
      reminder: true,
    },

    {
      id: 5,
      text: "Record Podcast",
      day_time: "Monday@ 03:00 PM",
      reminder: true,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTask(task.filter(item => item.id !== id));
    // console.log(task.filter(item => item.id > 3 ? `${item.id} Id is greater tha 2` : ''));

    console.log("delete", id);
  }

  // Toggle Add Task
  const [showAdd, setShowAdd] = useState(false);

  function toggleAdd() {
    setShowAdd((prevState) => !prevState);
  }

  // Add Task
  function addTask(taskItem) {
    const id = Math.floor(Math.random() * 100) + 1;
    const newTask = { id, ...taskItem };
    console.log(newTask);
    // setTask(prevTask => [prevTask, taskItem])
  }

  return (
    <div className="App">
      <div className="container">
        <Header onAdd={toggleAdd} showAdd={showAdd} />
        {showAdd && <AddTask addTask={addTask} />}
        <Tasks task={task} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
