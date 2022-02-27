import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

const DateRange = () => {
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());

  return (
    <div>
      <DatePicker value={from} onChange={setFrom} />
      <DatePicker value={to} onChange={setTo} />
    </div>
  );
};

export default DateRange;
