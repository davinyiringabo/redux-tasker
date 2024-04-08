import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Standard import for clarity
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./redux/actions";
import { FaDeleteLeft } from "react-icons/fa6";
import { deleteTask, store } from "./redux/store";

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({
    id: uuidv4(),
    title: "",
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newTask.title || !newTask.description) {
      return;
    }

    dispatch(addTask(newTask));
    setNewTask({ id: uuidv4(), title: "", description: "" });
  };

  const change = (event) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value });
  };

  const deleteSingleTask = (id) =>{
    dispatch(deleteTask(id));
  }

  return (
    <div className="w-screen md:h-screen bg-white flex flex-col items-center gap-3">
      <h3 className="ml-8 mt-8 text-xl font-bold">To Do Application</h3>

      <div className="w-full h-4/5 flex flex-col-reverse md:flex-row justify-between">
        <form onSubmit={handleSubmit} className="w-full md:w-2/3 h-3/5 flex flex-col items-center md:mt-0 mt-4">
          <header>Add a new task!</header>
          <label htmlFor="title" className="w-2/3 text-start mt-4">
            Title
          </label>
          <input name="title" onChange={change} value={newTask.title} id="title" type="text" placeholder="Enter Task Title" className="border border-neutral-600 py-3 rounded-lg w-2/3 mt-2 pl-4 outline-none"/>
          <label htmlFor="desc" className="w-2/3 text-start mt-4">
            Description
          </label>
          <input name="description" onChange={change} value={newTask.description} id="desc" type="text" placeholder="Enter Task Title" className="border border-neutral-600 py-3 rounded-lg w-2/3 mt-4 pl-4 outline-none"/>
          <button type="submit" className="w-2/3 mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Add Task</button>
        </form>
        <div className="w-full md:w-1/3 h-4/5 flex flex-col items-center">
          <header>Added Tasks</header>

          <div className="w-full h-full overflow-y-auto px-2">
            {tasks.length > 0 ?
            tasks.map((task, i)=>{
              return(
                <div key={i} className="w-full py-2 bg-slate-200 rounded-md pl-2 mt-2 relative">
                  <h4 className="text-md text-neutral-700 mb-1">{task.title}</h4>
                  <p className="text-sm text-neutral-600">{task.description}</p>
                  <span className="absolute right-2 top-3 cursor-pointer" onClick={()=> deleteSingleTask(task.id)}>
                    <FaDeleteLeft color="red" size={25}/>
                  </span>
                </div>
              )
            }) :
              <div className="w-full flex justify-center mt-10">
                <h4 className="text-sm">No Tasks Found!</h4>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;