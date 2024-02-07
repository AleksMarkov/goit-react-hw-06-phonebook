import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { addContact, deleteContact, setFilter } from './redux/actions';
import { getFilteredContacts } from './redux/selectors';

import styles from './app.module.css';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  // const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const isDublicate = ({ name }) => {
    const normolizedName = name.toLowerCase();
    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalizedCurrentName === normolizedName;
    });
    return Boolean(dublicate);
  };

  const onAddContact = data => {
    if (isDublicate(data)) {
      return alert(` ${data.name} is already in contacts`);
    }
    const action = addContact(data);
    dispatch(action);
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  // const getFilteredContacts = () => {
  //   if (!filter) {
  //     return contacts;
  //   }
  //   const normalizedFilter = filter.toLowerCase();
  //   const filteredContacts = contacts.filter(contacts => {
  //     const normolizedName = contacts.name.toLowerCase();
  //     return normolizedName.includes(normalizedFilter);
  //   });
  //   return filteredContacts;
  // };

  // const items = getFilteredContacts();

  /* const changeFilter = useCallback(({ target }) => {
    setFilter(target.value);
  }, []);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contacts => {
      const normolizedName = contacts.name.toLowerCase();
      return normolizedName.includes(normalizedFilter);
    });
    return filteredContacts;
  };

  const items = getFilteredContacts(); */

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter changeFilter={changeFilter} />
      <ContactList items={contacts} deleteContact={onDeleteContact} />
    </div>
  );
};

export default App;
