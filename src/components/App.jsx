import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';


export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts)
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter/>
      {contacts.length > 0 && <Contacts/>}
      </Section>
    </>
  );
};
