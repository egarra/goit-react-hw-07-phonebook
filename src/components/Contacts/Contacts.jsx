import { List, ListItem, Text, Btn } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteFetchedContact } from 'redux/contactsSlice';
import { useEffect } from 'react';



export const Contacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  const visibleContacts = filteredContacts.length > 0 ? [...filteredContacts] : [...contacts]
  
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <Text>{name}</Text>
            <Text>{number}</Text>
            <Btn type="button" onClick={() => {
              const action = deleteFetchedContact(id)
              dispatch(action)
            }}>
              Delete Contact
            </Btn>
          </ListItem>
        );
      })}
    </List>
  );
};
