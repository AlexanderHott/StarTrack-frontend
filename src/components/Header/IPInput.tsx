import { InputOutlined } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { DateContext } from '../../utils/DateContext';

const IPInput = () => {
  const { setIp } = useContext(DateContext);
  const [value, setValue] = useState('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIp(value);
      console.log(value);
    }
  };
  return (
    <div>
      <Span>Enter Pi's IP:</Span>
      <Input
        value={value || ''}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default IPInput;

const Input = styled.input``;
const Span = styled.span`
  margin-right: 1rem;
`;
