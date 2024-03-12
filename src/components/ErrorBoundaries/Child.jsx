import React, { useEffect, useState } from 'react';

export const Child = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/');
        if (!response.ok) {
          throw new Error('Fetch Error');
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();

    return () => {};
  }, []);

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return <h1>Child Component</h1>;
};
