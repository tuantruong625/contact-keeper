import React, { useReducer } from 'react'
import ContactContext from './ContactContext'
import contactReducer from './contactReducer'
import {
 ADD_CONTACT,
 DELETE_CONTACT,
 SET_CURRENT,
 CLEAR_CURRENT,
 UPDATE_CONTACT,
 FILTER_CONTACTS,
 CLEAR_FILTER
} from '../types'

const ContactState = props => {
 const initialState = {
  contacts: [
   {
    id: 1,
    name: 'Tuan',
    phone: '123-123-1231',
    email: 'tuan@gmail.com',
    type: 'personal'
   },
   {
    id: 2,
    name: 'bob',
    phone: '123-123-1231',
    email: 'bob@gmail.com',
    type: 'professional'
   }
  ],
  current: null
 }

 const [state, dispatch] = useReducer(contactReducer, initialState)

 // Add Contact
 const addContact = contact => {
  contact.id = Math.random()
  dispatch({ type: ADD_CONTACT, payload: contact })
 }

 // Delete Contact
 const deleteContact = id => {
  dispatch({ type: DELETE_CONTACT, payload: id })
 }

 // Set Current Contact
 const setCurrent = contact => {
  dispatch({ type: SET_CURRENT, payload: contact })
 }

 // Clear Current Contact
 const clearCurrent = () => {
  dispatch({ type: CLEAR_CURRENT })
 }

 // Update Contact
 const updateContact = contact => {
  dispatch({ type: UPDATE_CONTACT, payload: contact })
 }

 // Filter Contacts

 // Clear Filter

 return (
  <ContactContext.Provider
   value={{
    contacts: state.contacts,
    current: state.current,
    addContact,
    updateContact,
    deleteContact,
    setCurrent,
    clearCurrent
   }}>
   {props.children}
  </ContactContext.Provider>
 )
}

export default ContactState

