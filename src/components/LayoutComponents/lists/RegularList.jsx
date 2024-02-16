import React from 'react';

const RegularList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent
          key={index}
          {...{ [sourceName]: item }} // for author={item} or book={item}
        />
      ))}
    </>
  );
};

export default RegularList;
