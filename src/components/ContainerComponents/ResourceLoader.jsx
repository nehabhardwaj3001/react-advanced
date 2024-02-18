import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResourceLoader = ({ children, resourceUrl, resourceName }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setResource(response?.data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children?.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};

export default ResourceLoader;
