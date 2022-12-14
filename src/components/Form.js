import { useSelector, useDispatch } from 'react-redux';
import { updateSearch, updateSelected } from '../features/form/formSlice';
import { IoMdSearch } from 'react-icons/io';
import { FiChevronDown } from 'react-icons/fi';
import '../sass/layout/_Form.scss';
import '../sass/a11y/_a11y.scss';

const Form = ({ isDark }) => {
  const dispatch = useDispatch();
  const { search, selected } = useSelector(store => store.form);

  return (
    <form className={!isDark ? 'Form' : 'Form dark'}>
      <div className="Form-control input">
        <label htmlFor="search" className="offscreen">
          Search for A Country
        </label>
        <IoMdSearch className="search-icon" />
        <input
          type="text"
          id="search"
          placeholder="Search for a country..."
          value={search}
          onChange={e => dispatch(updateSearch(e.target.value))}
        />
      </div>
      <div className="Form-control select">
        <label htmlFor="region" className="offscreen">
          Filter by Region
        </label>
        <FiChevronDown className="chevron" />
        <select
          name="region"
          id="region"
          value={selected}
          onChange={e => dispatch(updateSelected(e.target.value))}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
