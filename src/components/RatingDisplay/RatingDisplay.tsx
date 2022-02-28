import React from 'react';
import RatingGraph from './RatingGraph';
import StarDisplay from './StarDisplay';

const RatingDisplay = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StarDisplay />
      <TotalRatings ratings={10} />
      <RatingGraph />
    </div>
  );
};

export default RatingDisplay;

type TotalRatingsProps = {
  ratings: number;
};
const TotalRatings = ({ ratings }: TotalRatingsProps) => {
  return (
    <p
      style={{
        color: '#505050',
        marginTop: '0',
      }}
    >
      {ratings} total ratings
    </p>
  );
};
