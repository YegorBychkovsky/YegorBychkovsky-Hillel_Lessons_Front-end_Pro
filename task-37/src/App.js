import './App.css';
import {ToDoBlock} from "./components/ToDoBlock";
import {InputPlus} from "./components/InputPlus";
import { useState } from 'react';

export const generateId = () => (
  Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
);

function App() {
  const [ tasks, setTask] = useState([]);
console.log(tasks);


function compFunc(a, b) {
  if ( a.statusActive = false &&  b.statusActive != true  ) {
      return -1;
  } else if ( a.statusActive != false && b.statusActive != true  ) {
      return 1;
  } else {
      return 0;
  }
}

return (
  <main className='container'>
      <h1>
        To do List
      </h1>
      <div className='input'>
        <InputPlus
          onAdd={(title)=>{
            setTask([
              {
                id: generateId(),
                title,
                statusActive: false
              },
              ...tasks
          ])
          }}
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
            compFunc = {(a, b) => {
              if ( a.statusActive < b.statusActive ) {
                return -1;
              } else if (a.statusActive > b.statusActive) {
                  return 1;
              } else {
                  return 0;
              }
            }}
          />
        ))}
      </div>
    </main>
  );
}


export default App;