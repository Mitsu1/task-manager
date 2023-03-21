import './App.css';
import GetTasks from './tasks/getTasks'; 
import CreateTask from './tasks/createTask'; 

function App() {
  return (
    <div className="App">
      <GetTasks />
      <CreateTask />
      <header className="App-header">
        <p>Ya logre juntar una peticion get con el store pero el siguiente reto es que se está duplicando cada registro y se agrega al store</p>
        <p>Lo siguiente es crear un servicio que contenga la funcion asincrona para obtener y crear tareas</p>
      </header>
    </div>
  );
}

export default App;
