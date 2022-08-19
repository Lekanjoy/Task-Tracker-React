import { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      text: "Workout",
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
      day_time: "Tuesday@ 01:00 PM",
      reminder: false,
    },

    {
      id: 4,
      text: "Call Dad",
      day_time: "Tuesday@ 01:00 PM",
      reminder: true,
    },

    {
      id: 5,
      text: "Call Dad",
      day_time: "Tuesday@ 01:00 PM",
      reminder: false,
    },
  ]);

  // Delete Task
  function deleteTask(id) {
    // setTask(task.filter((item) => item.id !== id ))
    console.log("delete", id);
  }

  // Toggle Add Task
  const [showAdd, setShowAdd] = useState(false);

  function toggleAdd() {
    setShowAdd((prevState) => !prevState);
  }

  return (
    <div className="App">
      <div className="container">
        <Header onAdd={toggleAdd} showAdd={showAdd} />
        {showAdd && <AddTask />}
        <Tasks task={task} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
