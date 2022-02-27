import React from 'react';
import styled from 'styled-components';
import { DateRange } from '..';

const Header = () => {
  return (
    <Container>
      Header
      <div>
        <DateRange />
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: hsl(185, 100%, 81%);
  display: flex;
  justify-content: space-between;
`;
