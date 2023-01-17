import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://63c581aae1292e5bea24f4b6.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async function(_, { rejectWithValue }) {
      try {
        const response = await axios(`/contacts`)
  
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