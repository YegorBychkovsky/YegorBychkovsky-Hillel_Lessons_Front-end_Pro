import './App.css';
import { useState, useCallback, useEffect } from 'react';
import { ContactBlock } from "./components/ContactBlock/ContactBlock";
import 'antd/dist/reset.css';
import { Button, Space } from 'antd';
import { FormContact } from './components/form/Form';


const generateId = () => (
  Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
);


function App({
}) {
  const [contacts, setContact] = useState([])


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response === "404") {
          console.log("Error 404");
        }
        return response.json()
      })
      .then((result) => {
        console.log(1);
        setContact(result)
      })
  }, [])
  {
    console.log(contacts);
    return (
      <div className='wrapper'>
        <div className="addBtn">
          <Button
            type="primary"
            onClick={() => {
              document.getElementById('newFrom').style = { display: 'block' }
            }}
          >Add New Contact
          </Button>
          <div
            id='newFrom'
            style={{ display: 'none' }}
          >
            <FormContact
              onAdd={(name, surname, phone) => {
                console.log(surname);
                setContact([
                  ...contacts,
                  {
                    id: generateId(),
                    name: `${name} ${surname}`,
                    phone
                  },
                ])
              }}
            />
          </div>
        </div>
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
        {contacts.map((contact) => (
          console.log(contact.name),
          <ContactBlock
            key={contact.phone}
            id={contact.id}
            name={contact.name.split(' ')[0]}
            surname={contact.name.split(' ')[1]}
            phone={contact.phone}
            onRemove={(idNumber) => {
              setContact(contacts.filter((contact) => contact.id !== idNumber))
            }}
          />
        ))}
      </div >
    );
  }




}

export default App;
