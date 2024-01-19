import React from 'react';
import RegularList from './RegularList';
import NumberedList from './NumberedList';
import { authors } from '../data/authors';
import smallAuthorListItem from '../authors/smallListItem';
import LargeAuthorListItem from '../authors/LargeListItem';
import { books } from '../data/books';
import SmallBookListItem from '../books/SmallListItem';
import LargeBookListItem from '../books/LargeListItem';

const Lists = () => {
  return (
    <>
      {/* Regular List */}
      <RegularList
        items={authors}
        sourceName='author'
        ItemComponent={smallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName='author'
        ItemComponent={LargeAuthorListItem}
      />
      <RegularList
        items={books}
        sourceName='books'
        ItemComponent={SmallBookListItem}
      />
      <RegularList
        items={books}
        sourceName='books'
        ItemComponent={LargeBookListItem}
      />

      {/* Numbered List */}
      <NumberedList
        items={authors}
        sourceName='author'
        ItemComponent={smallAuthorListItem}
      />
      <NumberedList
        items={authors}
        sourceName='author'
        ItemComponent={LargeAuthorListItem}
      />
      <NumberedList
        items={books}
        sourceName='books'
        ItemComponent={SmallBookListItem}
      />
      <NumberedList
        items={books}
        sourceName='books'
        ItemComponent={LargeBookListItem}
      />
    </>
  );
};

export default Lists;
