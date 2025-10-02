import { useState } from "react";

function TodoList() {
    
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");
    
    const addTaskButton = ()=>{

        if(newTask.trim()==="") return;
            setTask([...task, newTask]);
            setNewTask("");
        
    }
  return (
    <>
      <form className="form-todo">
        <div className="form-group">
            <h1>TODO-LIST</h1>
          <label for="Task">Task</label>
          <input
            type="text"
            className="form-control"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            />
          
        </div>
        <button type="submit" onClick={addTaskButton} className="btn btn-primary">
          Add Task
        </button>
      </form>
        <h1>Task List </h1>
      <ul>
        {task.map((task, index)=>
            <li key={index}>{task}</li>
        )}
      </ul>
    </>
  );
}
export default TodoList;
