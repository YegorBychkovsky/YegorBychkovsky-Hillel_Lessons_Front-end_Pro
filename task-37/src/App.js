import './App.css';
import {ToDoBlocks} from "./components/ToDoBlocks";
import {InputPlus} from "./components/InputPlus";
import { useState } from 'react';

export const generateId = () => (
  Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
);

function App() {
  const [ tasks, setTask] = useState([]);
console.log(tasks);

function compFunc(a, b) {
  if ( a.statusbar === "active" &&  b.statusbar !== "active"  ) {
      return -1;
  } else if ( a.statusbar !== "active" && b.statusbar !== "active"  ) {
      return 1;
  } else {
      return 0;
  }
}

tasks.sort(compFunc)

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
                statusbar: "passive"
              },
              ...tasks
          ])
          }}
        />
      </div>
      <div className='titleSection'>
      {tasks.map((task) => (
          <ToDoBlocks
            key={task.id}
            title={task.title}
            statusbar={task.statusbar}
            addStatusFunc = {(newStatus)=>{
              task.statusbar = newStatus
              console.log(newStatus);
            }}
          />
        ))}
      </div>
    </main>
  );
}


export default App;
// addStatus = {(newStatus)=>{
//   setTask(task.statusbar = newStatus)
// }}