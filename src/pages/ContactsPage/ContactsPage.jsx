import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContacts, selectError, selectLoading } from '../../redux/contacts/selectors';
import Loader from '../../components/Loader/Loader';
import ErrorText from '../../components/ErrorText/ErrorText'

export default function ContactsPage() {
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
    
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {isLoading && <Loader />}
            {isError && <ErrorText />}
            {contacts.length > 0 && <ContactList/>}
        </div>
    )
}