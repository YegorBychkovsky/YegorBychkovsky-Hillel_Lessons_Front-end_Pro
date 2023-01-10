import './App.css';
import {ToDoBlock} from "./components/ToDoBlock";
import {InputPlus} from "./components/InputPlus";
import { useState , useCallback } from 'react';

export const generateId = () => (
  Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
);
function App() {
  const handelFunc = useCallback((a, b) => {
    if ( a.statusActive < b.statusActive ) {
      return -1;
    } else if (a.statusActive > b.statusActive) {
        return 1;
    } else {
        return 0;
    }
  })
  const onAdd = useCallback((title)=>{
    setTask([
      {
        id: generateId(),
        title,
        statusActive: false
      },
      ...tasks
    ])
  })
  const [ tasks, setTask] = useState([]);


return (
  <main className='container'>
      <h1>
        To do List
      </h1>
      <div className='input'>
        <InputPlus
          onAdd={onAdd}
        />
      </div>
      <div className='titleSection'>
      {tasks.map((task) => (
          <ToDoBlock
            tasks={tasks}
            key={task.id}
            title={task.title}
            statusActive={task.statusActive}
            addStatusFunc = {(newStatus)=>{
                task.statusActive = !newStatus
            }}
            compFunc = {handelFunc}
          />
        ))}
      </div>
    </main>
  );
}


export default App;