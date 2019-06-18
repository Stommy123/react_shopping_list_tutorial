import React from 'react';

const ListItem = ({ name, description, toggleList, itemLocation }) => (
  <li>
    <h2>{name}</h2>
    <p>{description}</p>
    <button onClick={toggleList}>Add to {itemLocation}</button>
  </li>
);

export default ListItem;
