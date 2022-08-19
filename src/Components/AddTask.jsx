import { useState } from "react";

import React from "react";

function AddTask() {
const [title, setTitle] =  useState('');
const [time, setTime] = useState('');
const [reminder, setReminder] = useState(false);



  return (
    <form>

      <div className="title">
        <label htmlFor="title">Set Title:</label>
        <input type="text" id="title" placeholder="Add Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>

      <div className="time">
        <label htmlFor="time">Set Day & Time:</label>
        <input type="text" id="time" placeholder="Add Day@ Time"  value={time} onChange={(e) => setTime(e.target.value)}/>
      </div>

      <div className="reminder">
        <label htmlFor="reminder">Set Reminder:</label>
        <input type="checkbox" id="reminder"  value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type="submit" value="Add Task "/>
    </form>
  );
}

export default AddTask;
