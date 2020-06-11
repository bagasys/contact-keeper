import React, { useContext, useRef, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const {filterContacts, clearFilter, filtered} = contactContext;
  const text = useRef('');
  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  }, [filtered])
  const onChange = (event) => {
    if (text.current.value !== '') {
      filterContacts(event.target.value);
    } else {
      clearFilter();
    }
  }
  return (
    <form action="">
      <input ref={text} type="text" placeholder='Filter Contacts...' onChange={onChange}/>
    </form>
  )
}

export default ContactFilter
