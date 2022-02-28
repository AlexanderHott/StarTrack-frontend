import { LinearProgress } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { getNumberOfRatings, Ratings } from '../../utils/ratingMath';

type RatingGraphProps = {
  ratings: Ratings;
};
const RatingGraph = ({ ratings }: RatingGraphProps) => {
  return (
    <div
      style={{
        color: '#faaf00',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <SingleStarGraph
        index={5}
        percent={(ratings['5'] / getNumberOfRatings(ratings)) * 100}
      />
      <SingleStarGraph
        index={4}
        percent={(ratings['4'] / getNumberOfRatings(ratings)) * 100}
      />
      <SingleStarGraph
        index={3}
        percent={(ratings['3'] / getNumberOfRatings(ratings)) * 100}
      />
      <SingleStarGraph
        index={2}
        percent={(ratings['2'] / getNumberOfRatings(ratings)) * 100}
      />
      <SingleStarGraph
        index={1}
        percent={(ratings['1'] / getNumberOfRatings(ratings)) * 100}
      />
    </div>
  );
};
type SingleStarGraphType = {
  index: number;
  percent: number;
};
const SingleStarGraph = ({ index, percent }: SingleStarGraphType) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        color: 'inherit',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          color: '#faaf00',
        }}
      >
        <p style={{ color: 'black' }}>{index}</p>
        <StarIcon color={'inherit'} />
      </div>
      <LinearProgress
        variant='determinate'
        value={percent}
        style={{ height: '50px', borderRadius: '10px', width: '1000px' }}
        color='inherit'
      />
      <p style={{ color: 'black' }}>{Math.round(percent)}%</p>
    </div>
  );
};

export default RatingGraph;
