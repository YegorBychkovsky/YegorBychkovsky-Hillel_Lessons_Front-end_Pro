import './App.css';
import { useState, useCallback } from 'react';
import { ContactBlock } from "./components/ContactBlock/ContactBlock";
import 'antd/dist/reset.css';
import { Button, Space } from 'antd';
import { FormContact } from './components/form/Form';
import { InputContact } from './components/InputContact';


const generateId = () => (
  Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
);

function App({
}) {
  const [contacts, setContact] = useState([]);
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
              setContact([
                ...contacts,
                {
                  id: generateId(),
                  name,
                  surname,
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
      <ContactBlock
        number={0}
      />
      <ContactBlock
        number={1}
      />
      <ContactBlock
        number={2}
      />

      <ContactBlock
        number={3}
      />
      <ContactBlock
        number={4}
      />
      <ContactBlock
        number={5}
      />

      <ContactBlock
        number={6}
      />
      <ContactBlock
        number={7}
      />
      <ContactBlock
        number={8}
      />

      <ContactBlock
        number={9}
      />
      <section className='section'>
        {contacts.map((contact) => (
          <InputContact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            surname={contact.surname}
            phone={contact.phone}
            onRemove={(idNumber) => {
              setContact(contacts.filter((task) => task.id !== idNumber))
            }}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
