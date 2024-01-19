import React from 'react';

const NumberedList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, index) => (
        <div>
          <h3>{index}</h3>
          <ItemComponent
            key={index}
            {...{ [sourceName]: item }} // for author={item} or book={item}
          />
        </div>
      ))}
    </>
  );
};

export default NumberedList;
