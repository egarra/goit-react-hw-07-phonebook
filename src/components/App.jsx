import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';


export const App = () => {
  const { status, error } = useSelector(state => state.contacts)
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter/>
      {status === 'loading' && <h2>Loading...</h2>}
      <Contacts/>
      </Section>
    </>
  );
};
