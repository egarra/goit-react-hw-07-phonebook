import { List, ListItem, Text, Btn } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <Text>{name}</Text>
            <Text>{number}</Text>
            <Btn type="button" onClick={() => {
              const action = deleteContact(id)
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
