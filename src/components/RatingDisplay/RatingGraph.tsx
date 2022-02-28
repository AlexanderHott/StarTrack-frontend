import { LinearProgress } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
const RatingGraph = () => {
  return (
    <div style={{ color: '#faaf00' }}>
      <SingleStarGraph index={5} percent={90} />
      <SingleStarGraph index={4} percent={80} />
      <SingleStarGraph index={3} percent={70} />
      <SingleStarGraph index={2} percent={60} />
      <SingleStarGraph index={1} percent={50} />
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
        style={{ height: '30px', borderRadius: '10px', width: '1000px' }}
        color='inherit'
      />
      <p style={{ color: 'black' }}>{percent}%</p>
    </div>
  );
};

export default RatingGraph;
