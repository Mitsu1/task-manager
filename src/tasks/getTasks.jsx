import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../redux/taskSlice";

export default function GetTasks() {

  const dispatch = useDispatch();

  useEffect(() => {
    const task = async () => {
      try {
        const res = await axios.get(`http://localhost/TaskManager/tasks.php`);
        return dispatch(getTasks(res.data.body));
      } catch (error) {
        console.error(error);
      }
    };
    task();
  }, [dispatch])

  const tasks = useSelector((state) => state.tasks);
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
            tasks?.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{`${data.name}`}</td>
                  <td>{`${data.description}`}</td>
                  <td>{`${data.status}`}</td>
                  <td>{`${data.tag}`}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}