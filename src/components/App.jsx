import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';


export const App = () => {
  const { status } = useSelector(state => state.contacts)
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      {status === 'loading' && <Loader/>}
      <Section title="Contacts">
        <Filter/>
      <Contacts/>
      </Section>
    </>
  );
};
