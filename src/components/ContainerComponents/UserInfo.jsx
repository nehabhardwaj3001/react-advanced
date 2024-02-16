import React from 'react';

const UserInfo = ({ user }) => {
  const { name, age, country, books } = user || {};
  return user ? (
    <div>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default UserInfo;
