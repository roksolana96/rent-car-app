import React from 'react';
// import PropTypes from 'prop-types';


// import { nanoid } from 'nanoid';
import { 
    AddBtn, 
    Form, 
    InputBrandCar,
    InputPrice,
    InputKmFrom,
    InputKmTo,
    FormName,
    Option } from './SearchToFilter.styled';


export const SearchToFilter = () => {

const handleFormSubmit = e => {
    e.preventDefault();
}

  return (
    <>
      <Form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="name">
          <FormName>Car brand</FormName>
        <InputBrandCar
            placeholder="Enter the text"
            type="text"
            name="name"
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          >
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option selected value="coconut">Кокос</option>
          
        </InputBrandCar>

          
        </label>
        <label htmlFor="number">
          <FormName>Price/ 1 hour</FormName>
          <InputPrice
          placeholder="To $"
            type="price"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          >
            <Option value="one">1</Option>
            <Option value="two">2</Option>
            </InputPrice>
        </label>


        <label htmlFor="number">
          <FormName>Сar mileage / km</FormName>
          <InputKmFrom
          placeholder="From"
            type="price"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

        <InputKmTo
          placeholder="To"
            type="price"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>


        <AddBtn type="submit">Search</AddBtn>
      </Form>
      </>
  );
}