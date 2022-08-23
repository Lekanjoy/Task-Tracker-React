import Task from "./Task"

function Tasks({ tasks, deleteTask, toggleReminder }) {
  return (
    <div className="tasks">
      <Task
        tasks={tasks}
        deleteTask={deleteTask}
        toggleReminder={toggleReminder}
      />
    </div>
  );
}

export default Tasks