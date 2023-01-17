import { List, ListItem, Text, Btn } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteFetchedContact } from 'redux/operations'; 
import { useEffect } from 'react';
import { selectVisibleContacts } from 'redux/selectors';


export const Contacts = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
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
