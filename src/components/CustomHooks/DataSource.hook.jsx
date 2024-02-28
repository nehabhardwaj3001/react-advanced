import { useEffect, useState } from 'react';
import axios from 'axios';

const useDataSource = (getData = () => {}) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return resource;
};

export default useDataSource;
