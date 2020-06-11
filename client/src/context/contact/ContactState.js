import React, {useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../type'

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Komang Yogananda",
        email: "yoganteng@gmail.com",
        phone: "111-111-1111",
        type: "personal"
      },
      {
        id: 2,
        name: "Setya Wibawa",
        email: "durenpipelg@gmail.com",
        phone: "222-222-2222",
        type: "personal"
      },
      {
        id: 3,
        name: "Jeremy Vijay",
        email: "jjvjg@gmail.com",
        phone: "333-333-3333",
        type: "professional"
      },
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact
    const addContact = contact => {
      contact.id = uuid.v4();
      dispatch({type: ADD_CONTACT, payload: contact});
    }
  //Delete Contact

  //Update Contact 
  
  //Filter Contacts

  //Clear Filter

  //Set Current Contact

  //Clear Current Contact

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
};

export default ContactState;