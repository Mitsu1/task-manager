import { useState } from 'react';
import { useDispatch } from "react-redux";
import { createTask } from "../redux/taskSlice";

export default function CreateTask() {
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    id:0,
    name: "",
    description: "",
    tag: "",
    status: 0
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask((data) => {
      return { ...data, [name]: value }
    })
  };

  return (
    <div>
      <form>
        <input type="text" name="name" title='Nombre' placeholder='Nombre de la tarea' onChange={handleChange} />
        <input type="text" name="description" title='Descripción' placeholder='Descripción' onChange={handleChange} />
        <input type="text" name="tag" title='Tag' placeholder='Etiqueta' onChange={handleChange} />
      </form>
      {
        Object.keys(task).length !== 0 &&
        <button onClick={() => dispatch(createTask(task))}>
          Crear tarea
        </button>
      }
    </div>
  )
}