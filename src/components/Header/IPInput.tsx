import { InputOutlined } from '@mui/icons-material';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { DateContext } from '../../utils/DateContext';

const IPInput = () => {
  const { ip, setIp } = useContext(DateContext);

  return (
    <div>
      <Span>Enter Pi's IP:</Span>
      <Input value={ip || ''} onChange={(e) => setIp(e.target.value)} />
    </div>
  );
};

export default IPInput;

const Input = styled.input``;
const Span = styled.span`
  margin-right: 1rem;
`;
