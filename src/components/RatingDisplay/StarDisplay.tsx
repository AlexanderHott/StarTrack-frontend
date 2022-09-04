import { Rating } from '@mui/material';
import React from 'react';
type StarDisplayProps = {
  averageRating: number;
};
const StarDisplay = ({ averageRating }: StarDisplayProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        marginTop: '2rem',
      }}
    >
      <Rating
        name='half-rating-read'
        defaultValue={0}
        value={averageRating || 0}
        precision={0.5}
        readOnly
      />
      <h2 style={{ display: 'inline', marginBlock: '0' }}>
        {Math.round(averageRating * 10) / 10} out of 5
      </h2>
    </div>
  );
};

export default StarDisplay;

// const StarContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 1rem;
// `;
