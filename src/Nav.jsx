/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavList, LinkStyled } from './Nav.styled';
import { Title } from './Title';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred Shows' },
];

function Nav() {
  const location = useLocation();
  return (
    <div>
      <Title
        title="BOX OFFICE"
        subtitle="Are you looking for a movie or an actor?"
      />
      <NavList>
        {LINKS.map(items => (
          <li key={items.to}>
            <LinkStyled
              to={items.to}
              className={items.to === location.pathname ? 'active' : ''}
            >
              {items.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
}

export default Nav;
