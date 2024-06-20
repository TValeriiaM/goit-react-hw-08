import css from './App.module.css'
import ContactList from '../ContactList/ContactList'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from '../../redux/contactsOps';
import { selectContacts, selectLoading, selectError } from '../../redux/contactsSlice';
import Loader from "../Loader/Loader"
import ErrorText from "../ErrorText/ErrorText"


export default function App() {
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  return (
      <div>
        <h1 className={css.header}>Phonebook</h1>
        <ContactForm/>
        <SearchBox />
        {isLoading && <Loader />}
        {isError && <ErrorText/>}
        {contacts.length > 0 && <ContactList/>}
      </div>
  )
}
