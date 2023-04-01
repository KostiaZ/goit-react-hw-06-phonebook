import React, { useState } from 'react';
import s from './ContactForm.module.css';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleChange = e => {
    const prop = e.currentTarget.name;
    switch (prop) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        throw new Error('Error');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      setName('');
      setNumber('');
      return alert(`Number: ${data.name} is already in phonebook`);
    }
    dispatch(addContact(data));
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={s.inputName}
        />
      </label>
      <label>
        Number
        <input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={s.inputNumber}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}
