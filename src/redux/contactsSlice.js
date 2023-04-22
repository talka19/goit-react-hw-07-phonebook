import { createSlice } from '@reduxjs/toolkit'
import { addContact, deleteContact, fetchContacts } from './operations';


const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handlefulfilled = state => {
  state.isLoading = false;
  state.error = null;
}

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
      [fetchContacts.pending]: handlePending,
      [fetchContacts.fulfilled]:(state, action) => {
        state.items = action.payload;
        handlefulfilled(state);
      },
      [fetchContacts.rejected]: handleRejected,

      [addContact.pending]: handlePending,
      [addContact.fulfilled]:(state, action) => {
        state.items.push(action.payload);
        handlefulfilled(state);
      },
      [addContact.rejected]: handleRejected,

      [deleteContact.pending]: handlePending,
      [deleteContact.fulfilled]:(state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload);
        handlefulfilled(state);
      },
      [deleteContact.rejected]: handleRejected,
    },
  })

 
