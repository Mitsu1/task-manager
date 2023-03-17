import axios from 'axios';
import { useSelector } from "react-redux";

const task = async () => {
  try {
    const res = await axios.get(`http://localhost/TaskManager/tasks.php`);
    return res.data.body;
  } catch (error) {
    console.error(error);
  }
};

task();

function GetData (){
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

export default GetData;