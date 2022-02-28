import React from 'react';
import styled from 'styled-components';
import { DateRange } from '..';

const Header = () => {
  return (
    <Container>
      <h1>StarTrack</h1>
      <DateRange />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding-inline: 2rem;
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
