import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteFetchedContact, addFetchedContact } from './operations';

const setError = (state, {payload}) => {
  state.status = 'rejected';
  state.error = payload;
}

const setPending = (state) => {
  state.status = 'loading';
}

const contactsSlice = createSlice({
  
  name: 'contacts',
  initialState: {
    contacts: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: setPending,
    [deleteFetchedContact.pending]: setPending,
    [addFetchedContact.pending]: setPending,

    [fetchContacts.fulfilled]: (state, {payload}) => {
      state.status = 'resolved';
      state.contacts = payload;
    },
    [addFetchedContact.fulfilled]: (state, {payload}) => {
      state.status = 'resolved';
      state.contacts.push(payload);
    },
    [deleteFetchedContact.fulfilled](state, {payload}) {
      state.status = 'resolved';
      state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
    },
    [fetchContacts.rejected]: setError,
    [deleteFetchedContact.rejected]: setError,
    [addFetchedContact.rejected]: setError,
  }
});
export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
