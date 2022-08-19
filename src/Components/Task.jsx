import { useState } from "react";
import icon from '../assets/icon-close.svg'

function Task({props, onDelete}) {

 let mappedTask = props.task.map(item =>{
    // Toggle Reminder State and Function
    const [reminder, setReminder] = useState(item.reminder)


    function toggleReminder(){
        setReminder(prevReminder => prevReminder ? false : true);
    }

    
    return (
      <div className={reminder ? 'task-reminder' : undefined}  key={item.id} onDoubleClick={toggleReminder}>
        <section className="title">
            <h4>{item.text}</h4>
            <img src={icon} alt="cancel" onClick={() => onDelete(item.id)}/>
        </section>
        <p>{item.day_time}</p>
      </div>
    );

 })

  return <div className="task">{mappedTask}</div>;
}

export default Task;
