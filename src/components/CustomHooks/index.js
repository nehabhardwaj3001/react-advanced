import React from 'react';
import BookInfo from './BookInfo';
import UserInfo from './UserInfo';

const CustomHooks = () => {
  return (
    <>
      <UserInfo userId={'1'} />
      <BookInfo bookId={'2'} />
    </>
  );
};

export default CustomHooks;
