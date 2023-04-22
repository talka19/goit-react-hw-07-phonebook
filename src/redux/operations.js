import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import * as mockaApi from 'service/mockapi'

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, thunkAPI) => {
    try {
        const contacts = await mockaApi.fetchContacts();
        return contacts;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message); 
    }
});

export const addContact = createAsyncThunk ('contacts/addContact', async (contactData, thunkAPI) => {
    try {
        const contacts = await mockaApi.addContact(contactData);
        toast.success('Successfully added!');
        return contacts;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (data, thunkAPI)=>{
    try {
        await mockaApi.deleteContact(data.id);
        toast.success('Successfully deleted!');
        return data.id;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})