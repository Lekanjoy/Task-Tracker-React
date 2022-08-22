import React, { useState } from "react";
import Icon from '../assets/icon-close.svg'

function Task({ tasks, deleteTask }) {
  const mappedTask = tasks.map((task) => {
    const [reminder, setReminder] = useState(task.reminder);

    //   Toggle Reminder on DoubleClick
    function toggleReminder() {
      setReminder((prevReminder) => !prevReminder);
    }

    return (
      <div
        key={task.id}
        className={reminder ? "task task-reminder" : "task"}
        onDoubleClick={toggleReminder}
      >
        <div className="flex justify-between">
          <h1>{task.text}</h1>
          <img src={Icon} className="w-3 h-3 " onClick={ () => deleteTask(task.id)} />
        </div>
        <p>{task.day_time}</p>
      </div>
    );
  });

  return <div className="tasks">{mappedTask}</div>;
}

export default Task;
