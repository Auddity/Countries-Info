import React, { useState } from 'react';

const Form = () => {
  // const [formInputs, setFormInputs] = useState({
  //   search: '',
  //   selected: '',
  // });

  return (
    <Form className="Form">
      <div className="Form-control">
        <label htmlFor="search" className="a11y">
          Search for A Country
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search for a country..."
          // value={}
        />
      </div>
      <div className="Form-control">
        <label htmlFor="">Filter by Region</label>
        <select name="region" id="region">
          {/* Map through regions from api to produce options */}
          <option value="temp" selected="selected">
            temp
          </option>
        </select>
      </div>
    </Form>
  );
};

export default Form;
