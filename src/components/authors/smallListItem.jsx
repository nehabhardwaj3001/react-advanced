import React from 'react';

const smallAuthorListItem = ({ author }) => {
  const { name, age } = author;
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};

export default smallAuthorListItem;
