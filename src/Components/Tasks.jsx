import Task from "./Task"

function Tasks({ tasks, deleteTask }) {
  return (
    <div className="tasks">
      <Task tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default Tasks