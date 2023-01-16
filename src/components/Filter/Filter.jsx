import { useDispatch } from 'react-redux';
import { InputField } from './Filter.styled';
import { filterContact } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch()
  return (
    <>
      <p>Find contacts by name</p>
      <InputField
        placeholder="Type contact"
        type="text"
        onChange={e => {
          const action = filterContact(e.target.value);
          dispatch(action);
        }}
      />
    </>
  );
};
