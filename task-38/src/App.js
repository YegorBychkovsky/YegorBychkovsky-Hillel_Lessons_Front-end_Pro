import './App.css';
import { useState , useCallback } from 'react';
import { ContactBlock } from "./components/ContactBlock/ContactBlock";

function App({
  
}) {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json()
  })
  .then((json) => {
    return resolve(json)
  })
  .catch((err) => {
    reject(err);
  })





  return (
    <div className='wrapper'>
      <div className="topBlock">
        <div className="name">
          <h2>
              Name
              
          </h2>
        </div>
        <div className="surname">
            <h2>
                Surname
            </h2>
        </div>
        <div className="phone">
            <h2>
                Phone
            </h2>
        </div>
        <div className="deleteBtn">
        </div>
      </div>
      <ContactBlock
      
      />
    </div>

  );
}

export default App;
