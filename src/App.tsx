import React from 'react';
import { Header, RatingDisplay } from './components';
import { DateContext } from './utils/DateContext';

function App() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  return (
    <DateContext.Provider
      value={{ startDate, setStartDate, endDate, setEndDate }}
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
