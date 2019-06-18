import React from 'react';

const Wishlist = ({ list = [] }) => (
  <>
    <h1>Wishlist</h1>
    <ul>
      {list.map(item => (
        <li>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  </>
);

export default Wishlist;
