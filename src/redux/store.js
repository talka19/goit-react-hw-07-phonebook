import { configureStore } from '@reduxjs/toolkit'
import {contacts} from 'redux/contactsSlice'
import {filter} from 'redux/filterSlice'
 

  export const store = configureStore({
    reducer: {
      contacts: contacts.reducer,
      filter: filter.reducer,
    },
  });
  

