import React, {useReducer} from 'react';
import {v4 as uuid} from 'uuid';
import axios from 'axios'
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS
} from '../type'

const ContactState = props => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Get Contacts
  const getContacts = async () => {
    

    try {
      const res = await axios.get('/api/contacts');
      dispatch({type: GET_CONTACTS, payload: res.data});
    } catch (error) {
      dispatch({type: CONTACT_ERROR, payload: error.response.msg});
    }
  }

  //Add Contact
  const addContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/contacts', contact, config);
      dispatch({type: ADD_CONTACT, payload: res.data});
    } catch (error) {
      dispatch({type: CONTACT_ERROR, payload: error.response.msg});
    }
  }
  //Delete Contact
  const deleteContact = async id => {
    try {
      const res = await axios.delete(`/api/contacts/${id}`);
      dispatch({type: DELETE_CONTACT, payload: id});
    } catch (error) {
      dispatch({type: CONTACT_ERROR, payload: error.response.msg});
    }
  }

  //Clear contacts

  const clearContacts = () => {
    dispatch({type: CLEAR_CONTACTS})
  }

  //Update Contact 
  const updateContact = contact => {
    dispatch({type: UPDATE_CONTACT, payload: contact});
  }
  //Filter Contacts
  const filterContacts = text => {
    dispatch({type: FILTER_CONTACTS, payload: text});
  }
  //Clear Filter
  const clearFilter = () => {
    dispatch({type: CLEAR_FILTER});
  }
  //Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  }
  //Clear Current Contact
  const clearCurrent = () => {
    dispatch({type: CLEAR_CURRENT});
  }
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        getContacts,
        clearContacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
};

export default ContactState;