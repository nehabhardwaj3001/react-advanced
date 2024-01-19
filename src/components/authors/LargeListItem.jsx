import React from 'react';

const LargeAuthorListItem = ({ author }) => {
  const { name, age, country, books } = author;
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>country: {country}</p>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  );
};

export default LargeAuthorListItem;
