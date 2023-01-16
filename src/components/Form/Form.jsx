import { useState } from 'react';
import { InputForm, Btn, InputField } from './Form.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Form = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const inputChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value)
    } else {
      setNumber(event.target.value)
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault()
    const isAtList = contacts.find(contact => contact.name === name);
    if (isAtList) {
      Notify.failure('Contact with such name is already exist');
      return;
    }
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    const action = addContact(contact);
    dispatch(action);
    e.target.reset();
  }

    return (
      <InputForm onSubmit={onFormSubmit}>
        <p>Name</p>
        <InputField
          placeholder="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={inputChange}
        />
        <p>Number</p>
        <InputField
          placeholder="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={inputChange}
        />
        <Btn type="submit">Add contact</Btn>
      </InputForm>
    );
  }
