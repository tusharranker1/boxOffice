import React from 'react';
import ActorCard from './ActorCard';
import { FlexGrid } from '../styled';
import IMAGE_NOT_FOUND from '../show/images/not-found.png';

function ActorGrid({ data }) {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          gender={person.gender}
          deathday={person.deathday}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </FlexGrid>
  );
}

export default ActorGrid;
