import Icon from "../assets/icon-close.svg";

function Task({ tasks, deleteTask, toggleReminder }) {
  const mappedTask = tasks.map((task) => {
    return (
      <div
        key={task.id}
        className={task.reminder ? "task task-reminder" : "task"}
        onDoubleClick={() => toggleReminder(task.id)}
      >
        <div className="flex justify-between">
          <h1>{task.text}</h1>
          <img
            src={Icon}
            className="w-3 h-3 "
            onClick={() => deleteTask(task.id)}
          />
        </div>
        <p>{task.day_time}</p>
      </div>
    );
  });

  return <div className="tasks">{mappedTask}</div>;
}

export default Task;
