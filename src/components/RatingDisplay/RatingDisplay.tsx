import React, { useContext, useEffect, useState } from 'react';
import RatingGraph from './RatingGraph';
import StarDisplay from './StarDisplay';
import axios from 'axios';
import { DateContext } from '../../utils/DateContext';
import { getAverageRating, Ratings } from '../../utils/ratingMath';
import { getNumberOfRatings } from '../../utils/ratingMath';

const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1; // starts with Jan = 0
  const year = date.getFullYear();
  return `${String(month).padStart(2, '0')}-${String(day).padStart(
    2,
    '0'
  )}-${year}`;
};

const RatingDisplay = () => {
  const [ratings, setRatings] = useState({
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
  });

  const { startDate, endDate } = useContext(DateContext);

  useEffect(() => {
    if (startDate && endDate) {
      console.log('fmt', formatDate(startDate), formatDate(endDate));
      const data = `{"startDate":"${formatDate(
        startDate
      )}","endDate": "${formatDate(endDate)}"}`;

      console.log('data', data);

      // axios
      //   .post<Ratings>('http://localhost:8080/ratings/range', {
      //     data,
      //     headers: {
      //       'Access-Control-Allow-Origin': '*',
      //       'Content-Type': 'application/json;charset=UTF-8',
      //     },
      //   })
      //   .then(({ data }) => setRatings(data))
      //   .catch((err) => console.log(err));
      axios({
        method: 'POST',
        url: 'http://localhost:8080/ratings/range',
        data: data,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      })
        .then(({ data }) => setRatings(data))
        .catch((err) => console.log(err));
    } else {
      axios
        .get<Ratings>('http://localhost:8080/ratings')
        .then(({ data }) => setRatings(data))
        .catch((err) => console.log(err));
    }
    console.log(ratings);
  }, [endDate, startDate]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StarDisplay averageRating={getAverageRating(ratings)} />
      <TotalRatings ratings={getNumberOfRatings(ratings)} />
      <RatingGraph ratings={ratings} />
    </div>
  );
};

export default RatingDisplay;

type TotalRatingsProps = {
  ratings: number;
};

const TotalRatings = ({ ratings }: TotalRatingsProps) => {
  return (
    <h3
      style={{
        color: '#505050',
        marginTop: '0',
        fontWeight: 'normal',
      }}
    >
      {ratings} total ratings
    </h3>
  );
};
