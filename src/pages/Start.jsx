/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import { getApiData } from '../misc/apiFetch';
import { useShows } from '../misc/custom-hooks';
import ShowGrid from '../show/ShowGrid';

const Start = () => {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => getApiData(`/shows/${showId}`));
      Promise.all(promises)
        .then(getApi => getApi.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  return (
    <div>
      {isLoading && <div>Shows are Still loading</div>}{' '}
      {error && <div>Error occurred : {error}</div>}
      {!isLoading && !shows && <div>No Shows were Added</div>}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </div>
  );
};

export default Start;
