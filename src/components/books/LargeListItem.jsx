import React from 'react';

const LargeBookListItem = ({ books }) => {
  const { name, title, pages, price } = books;
  return (
    <>
      <h2>{name}</h2>
      <p>{title}</p>
      <p>{pages}</p>
      <p>{price}</p>
    </>
  );
};

export default LargeBookListItem;
