import { useState } from "react";

function AddTask({addTask}) {
const [text, setText] =  useState('');
const [day_time, setTime] = useState('');
const [reminder, setReminder] = useState(false);

function onSubmit(e){
  e.preventDefault();

  if(!text){
    alert('Please Add a Task');
    return
  }

  addTask({ text, day_time, reminder})

  setText('')
  setTime('')
  setReminder(false);

}



  return (
    <form onSubmit={onSubmit}>

      <div className="title">
        <label htmlFor="title">Set Task:</label>
        <input type="text" id="title" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
      </div>

      <div className="time">
        <label htmlFor="time">Set Day & Time:</label>
        <input type="text" id="time" placeholder="Add Day@ Time"  value={day_time} onChange={(e) => setTime(e.target.value)}/>
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
