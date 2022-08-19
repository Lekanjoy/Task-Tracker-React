import Task from "./Task"

function Tasks(props) {


  return (
    <div className='tasks'>
        <Task props={props} onDelete={props.onDelete} />  
     </div>
  )
}

export default Tasks