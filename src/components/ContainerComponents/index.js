import React from 'react';
import CurrentUserLoader from './CurrentUserLoader';
import UserInfo from './UserInfo';
import BookInfo from './BookInfo';
import UserLoader from './UserLoader';
import ResourceLoader from './ResourceLoader';
import DataSource from './DataSouce';
import axios from 'axios';
import DataSourceWithRender from './DataSourceWithRender';

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

const ContainerComponent = () => {
  return (
    <>
      {/* for fetching current user info */}
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}

      {/* for fetching information about a user with unique id */}
      {/* <UserLoader userId={3}>
        <UserInfo />
      </UserLoader> */}

      {/* use a common resolurce loader to fetch infor either book or user */}
      {/* <ResourceLoader
        resourceUrl={'/users/3'}
        resourceName={'user'}
      >
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader
        resourceUrl={'/books/3'}
        resourceName={'book'}
      >
        <BookInfo />
      </ResourceLoader> */}

      {/* by using a getDataFromServer function to fetch data as a prop */}
      {/* <DataSource
        getData={() => getDataFromServer('/users/2')}
        resourceName='user'
      >
        <UserInfo />
      </DataSource> */}

      {/* render prop */}
      <DataSourceWithRender
        getData={() => getDataFromServer('/users/2')}
        resourceName='user'
        render={(resource) => <UserInfo user={resource} />}
      />

      {/* display data from local storage */}
      <DataSource
        getData={() => getDataFromLocalStorage('test')}
        resourceName={'msg'}
      >
        <Message />
      </DataSource>
    </>
  );
};

export default ContainerComponent;
