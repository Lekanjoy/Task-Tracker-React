import { useState } from "react";

import React from "react";

function AddTask({addTask}) {
const [title, setTitle] =  useState('');
const [time, setTime] = useState('');
const [reminder, setReminder] = useState(false);

function onSubmit(e){
  e.preventDefault();

  if(!title){
    alert('Please Add a Task')
    return
  }

  addTask({title, time, reminder})

  setTitle('')
  setTime('')
  setReminder(false);

}



  return (
    <form onSubmit={onSubmit}>

      <div className="title">
        <label htmlFor="title">Set Task:</label>
        <input type="text" id="title" placeholder="Add Task" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>

      <div className="time">
        <label htmlFor="time">Set Day & Time:</label>
        <input type="text" id="time" placeholder="Add Day@ Time"  value={time} onChange={(e) => setTime(e.target.value)}/>
      </div>

      <div className="reminder">
        <label htmlFor="reminder">Set Reminder:</label>
        <input type="checkbox" id="reminder" checked={reminder}  value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type="submit" value="Add Task "/>
    </form>
  );
}

export default AddTask;
