import { Contacts } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import React, { useState, useEffect } from 'react'
import { Container } from './App.styled';
import  ContactsData from 'components/ContactsData.json'


const GET_LS_CONTACTS = JSON.parse(localStorage.getItem('contacts'));

const App = () => {
  const [contacts, setContacts] = useState(GET_LS_CONTACTS ?? ContactsData);
  const [filter, setFilter] = useState('');
  console.log(contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

const formSubmitHandler = event => {
    const newContact = {
      id: event.id,
      name: event.name,
      number: event.number,
    };
    const contactsLists = [...contacts];
    console.log(event);

    if (
      contactsLists.find(
        contacts => newContact.name.toLowerCase() === contacts.name.toLowerCase()
      )) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    } 
    
    setContacts(state => [ newContact, ...state]);
    console.log("contactsLists: ", contactsLists);
  }

  
const handleDelete = selectedId => {
    setContacts(
      contacts.filter(contact => contact.id !== selectedId),
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };  
  
const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();   

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }  
    
    return (
      <Container>
        <PhonebookForm onSubmit={formSubmitHandler} />
        <Filter
          value={filter}
          onFilter={changeFilter} />
        <Contacts
          contactsFiltred={getVisibleContacts()}
          handleDelete={handleDelete}
        ></Contacts>
      </Container>
  )
}

export default App