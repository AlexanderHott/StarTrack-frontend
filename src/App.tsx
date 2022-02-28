import React from 'react';
import { Header, RatingDisplay } from './components';
import { DateContext } from './utils/DateContext';

function App() {
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  const [ip, setIp] = React.useState<string | null>(null);

  return (
    <DateContext.Provider
      value={{ startDate, setStartDate, endDate, setEndDate, ip, setIp }}
    >
      <div>
        <Header />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <RatingDisplay />
        </div>
      </div>
    </DateContext.Provider>
  );
}

export default App;
