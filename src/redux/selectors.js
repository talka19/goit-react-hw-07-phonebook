import { createSelector } from "@reduxjs/toolkit";

export const selectorContacts = state => state.contacts.items;

export const selectorFilter = state => state.filter;

export const selectorIsLoading = state => state.contacts.isLoading;

export const selectorError = state => state.contacts.error;

export const shownContacts = createSelector(
    [selectorContacts, selectorFilter],
    (contacts, filterValue) =>
      contacts.filter(contact => contact.name.toLowerCase().includes(filterValue))
);
