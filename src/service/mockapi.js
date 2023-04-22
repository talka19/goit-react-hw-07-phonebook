import axios from 'axios';

axios.defaults.baseURL = 'https://643feefa3dee5b763e29f717.mockapi.io';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
};

export async function addContact({name, number}) {
    const { data } = await axios.post('/contacts', { name, number });
    return data;
};

export async function deleteContact(contactId) {
    const { data } = axios.delete(`/contacts/${contactId}`);
    return data;
};