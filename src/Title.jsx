import React from 'react';
import { TitleWrapper } from './Title.styled';

export function Title({ title, subtitle }) {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
}
