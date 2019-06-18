import React from 'react';

const ShoppingList = ({ list = [] }) => (
  <ul>
    {list.map(item => (
      <li>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </li>
    ))}
  </ul>
);

export default ShoppingList;
