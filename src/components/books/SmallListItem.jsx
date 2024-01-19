import React from 'react';

const SmallBookListItem = ({ books }) => {
  const { name, title } = books;
  return (
    <p>
      Name: {name}, Title: {title}
    </p>
  );
};

export default SmallBookListItem;
