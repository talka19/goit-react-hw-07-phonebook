import {ContactList} from 'components/ContactsList/ContactsList';
import {ContactForm} from './ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import {TitleContacts, AllContacts} from 'components/App.styled';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { shownContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';


export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(shownContacts);
  
  useEffect(()=> {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 15,
          color: '#010101',
        }}
      >
      <Toaster
            toastOptions={{
            style: {
            border: '1px solid #713200',
            padding: '16px',
            margin: '10px',
          },
        }}
        position="top-right"
      />
        <h1>Phonebook</h1>
        <ContactForm />
        <TitleContacts>Contacts</TitleContacts>
        <AllContacts>All contacts: {contacts.length}</AllContacts>
        <Filter />
        {/* {isLoading && <b>Loading ...</b>} */}
        <ContactList />
        </div>
      )
  
  }

  export default App
 
