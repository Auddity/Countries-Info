import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearch, updateSelected } from '../features/form/formSlice';
import { IoMdSearch } from 'react-icons/io';
import '../sass/layout/_Form.scss';
import '../sass/a11y/_a11y.scss';

const Form = () => {
  const dispatch = useDispatch();
  const { search, selected } = useSelector(store => store.form);
  const { isDark } = useSelector(store => store.theme);

  return (
    <form className={!isDark ? 'Form' : 'Form dark'}>
      <div className="Form-control">
        <label htmlFor="search" className="offscreen">
          Search for A Country
        </label>
        <IoMdSearch />
        <input
          type="text"
          id="search"
          placeholder="Search for a country..."
          value={search}
          onChange={e => dispatch(updateSearch(e.target.value))}
        />
      </div>
      <div className="Form-control">
        <label htmlFor="region" className="offscreen">
          Filter by Region
        </label>
        <select
          name="region"
          id="region"
          value={selected}
          onChange={e => dispatch(updateSelected(e.target.value))}
        >
          {/* Map through regions from api to produce options */}
          <option value="">Filter by Region</option>
          <option value="Belgium">Belgium</option>
          <option value="United States">United States</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
