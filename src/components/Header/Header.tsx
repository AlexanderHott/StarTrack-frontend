import React from 'react';
import styled from 'styled-components';
import { DateRange } from '..';
import IPInput from './IPInput';

const Header = () => {
  return (
    <Container>
      <h1>StarTrack</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <IPInput />
        <DateRange />
      </div>
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
