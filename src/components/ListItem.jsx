import React from 'react';

const ListItem = ({ name, description, toggleList, itemLocation, removeItem }) => (
  <li>
    <h2>
      <button onClick={removeItem}>✖</button>
      {name}
    </h2>
    <p>{description}</p>
    <button onClick={toggleList}>Add to {itemLocation}</button>
  </li>
);

export default ListItem;
