import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63c581aae1292e5bea24f4b6.mockapi.io';

const setError = (state, {payload}) => {
  state.status = 'rejected';
  state.error = payload;
}

const setPending = (state) => {
  state.status = 'loading';
}

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function(_, { rejectWithValue }) {
    try {
      const response = await axios(`/contacts`)
      console.log(response)

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const deleteFetchedContact = createAsyncThunk(
  'contacts/deleteFetchedContact',
  async function(id, {rejectWithValue}) {
    try {
      const response = await axios.delete(`/contacts/${id}`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const addFetchedContact = createAsyncThunk(
  'contacts/addFetchedContact',
  async function(contact, {rejectWithValue}) {
   try {
    
    const response = await axios.post(`/contacts`, {
      ...contact
    })
   
    return response.data
  }catch (error) {
    return rejectWithValue(error.message)
   }
  }
)
  

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
