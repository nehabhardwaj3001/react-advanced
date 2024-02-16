import React from 'react';

const BookInfo = ({ book }) => {
  const { name, price, title, pages } = book || {};
  return book ? (
    <div>
      <h3> {name}</h3>
      <p>{price}</p>
      <h3>Title: {title}</h3>
      <p>Number of Pages: {pages}</p>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default BookInfo;
