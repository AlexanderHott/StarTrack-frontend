import React, { useContext } from 'react';
import DatePicker from 'react-date-picker';
import { DateContext } from '../../utils/DateContext';

const DateRange = () => {
  const { startDate, setStartDate, endDate, setEndDate } =
    useContext(DateContext);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <h3>From</h3>
        <DatePicker value={startDate} onChange={setStartDate} />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <h3>To</h3>
        <DatePicker value={endDate} onChange={setEndDate} />
      </div>
    </div>
  );
};

export default DateRange;
