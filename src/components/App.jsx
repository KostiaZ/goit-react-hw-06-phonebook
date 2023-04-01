import s from './App.module.css';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
