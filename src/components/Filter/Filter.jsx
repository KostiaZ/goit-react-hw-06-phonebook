import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactSlice';

import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const filterChange = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
  return (
    <div>
      <label>
        Filter
        <input
          className={s.input}
          type="name"
          value={filter}
          onChange={filterChange}
        />
      </label>
    </div>
  );
};

export default Filter;
