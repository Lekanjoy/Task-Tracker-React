import Button from "./Buttton";

function Header({onAdd, showAdd}) {


  return (
    <header>
      <h3>Task Manager</h3>
      <Button color="white" bgc={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  );
}

export default Header;
