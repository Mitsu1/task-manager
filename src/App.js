import './App.css';
import GetTasks from './tasks/getTasks'; 
import CreateTask from './tasks/createTask'; 

function App() {
  return (
    <div className="App">      
      <header className="App-header">
        <h3>Tarea 3</h3>
        <p>Al agregar una nueva tarea almacenarla en el store y en la bd</p>
      </header>
      <GetTasks />
      <CreateTask />
    </div>
  );
}

export default App;
