import './App.css';
import { GetTask,CreateTask } from './services/api'; 

function App() {
  return (
    <div className="App">
      <GetTask />
      <CreateTask />
      <header className="App-header">
        <p>Ya implementé axios y redux state, funcionan por separado. El initialState está creado manualmente, el siguiente paso es: almacenar los registros de la bd en el store y dejar el initialState = []</p>
      </header>
    </div>
  );
}

export default App;
