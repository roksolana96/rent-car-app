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
            required
          >
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option value="coconut">Кокос</option>
          
        </InputBrandCar>

          
        </label>
        <label htmlFor="number">
          <FormName>Price/ 1 hour</FormName>
          <InputPrice
          placeholder="To $"
            type="price"
            name="number"
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
            required
          />

        <InputKmTo
          placeholder="To"
            type="price"
            name="number"
            required
          />
        </label>


        <AddBtn type="submit">Search</AddBtn>
      </Form>
      </>
  );
}