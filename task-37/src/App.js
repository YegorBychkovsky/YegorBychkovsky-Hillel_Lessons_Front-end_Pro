import './App.css';
import {InputTask} from "./components/InputTask";
import {InputPlus} from "./components/inputPlus";
import { useState } from 'react';

export const generateId = () => (
  Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
);

function App() {
  const [ tasks, setTask] = useState([

]);
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
              },
              ...tasks
          ])
          }}
        />
        {/* <ToDoList ></ToDoList> */}
      </div>
      <div className='titleSection'>
      {tasks.map((task) => (
          <InputTask
            key={task.id}
            title={task.title}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
