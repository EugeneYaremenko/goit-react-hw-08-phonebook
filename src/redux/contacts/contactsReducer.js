import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

const addContact = (state, action) => {
  return [...state, action.payload];
};

const removeContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload);
};

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.removeContactsSuccess]: removeContact,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,

  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,

  [contactsActions.removeContactsRequest]: () => true,
  [contactsActions.removeContactsSuccess]: () => false,
  [contactsActions.removeContactsError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
