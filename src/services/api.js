import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../redux/taskSlice";

const task = async () => {
  try {
    const res = await axios.get(`http://localhost/TaskManager/tasks.php`);
    return res.data.body;
  } catch (error) {
    console.error(error);
  }
};

task();

export function GetTask (){
  const tasks = useSelector((state) => state.tasks);
  return(
    <div>
      {
        tasks?.map((record)=>{
          return(
            <div key={record.id}>
              <p>{`${record.name}`}</p>
              <p>{`${record.description}`}</p>
              <p>{`Estatus: ${record.status}`}</p>
              <p>{`Etiqueta: ${record.tag}`}</p>
            </div>
          )
        })
      }            
    </div>
  )
}

export function CreateTask (){
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    name : "",
    description : "",
    tag : ""
  });

  const handleChange = (event) => {
    const { name, value} = event.target;    
    setTask((data) => {
      return{...data, [name]: value}
    })
  };

  return(
    <div className='App'>
      <form>
        <input type="text" name="name" onChange={ handleChange }/>
        <input type="text" name="description" onChange={ handleChange } />
        <input type="text" name="tag" onChange={ handleChange }/>
      </form>
      {
        Object.keys(task).length != 0 && 
        <button onClick={() => dispatch(createTask (task))}>
          Crear tarea
        </button>
      }       
    </div>
  )
}