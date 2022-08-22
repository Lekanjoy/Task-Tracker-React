

function Button({ toggleShowAddTask, bgc, text }) {

  return <button style={ { backgroundColor:bgc } } onClick={toggleShowAddTask}>{text}</button>;
}

export default Button;
