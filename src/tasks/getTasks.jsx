import axios from 'axios'
import { useEffect } from 'react'
import { getTasks } from "../redux/taskSlice"
import { useSelector, useDispatch } from "react-redux"

export default function GetTasks() {

  const dispatch = useDispatch()

  useEffect(() => {
    const task = async () => {
      try {
        const res = await axios.get(`http://localhost/TaskManager/tasks.php`)
        dispatch(getTasks(res.data.body))
      } catch (error) {
        console.error(error)
      }
    }
    task()
  }, [dispatch])

  let tasks = useSelector((state) => state.tasks)
  
  tasks = tasks.filter((task, index, tasks) => {
    return tasks.findIndex(t => t.id === task.id) === index;
  });
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Estatus</th>
            <th>Etiqueta</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks?.map((task) => {
              return (
                <tr key={task.id}>
                  <td>{`${task.name}`}</td>
                  <td>{`${task.description}`}</td>
                  <td>{`${task.status}`}</td>
                  <td>{`${task.tag}`}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}