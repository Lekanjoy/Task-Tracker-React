import Button from "./Buttton";

function Header({ showAddTask, toggleShowAddTask }) {
  return (
    <header className=" px-3 sm:w-96">
      <h3>Task Manager</h3>
      <Button
        showAddTask={showAddTask}
        toggleShowAddTask={toggleShowAddTask}
        text={showAddTask ? "Close" : "Add"}
        bgc={showAddTask ? "red" : "green"}
      />
    </header>
  );
}

export default Header;
