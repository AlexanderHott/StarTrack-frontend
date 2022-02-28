export type Ratings = {
  '1': number;
  '2': number;
  '3': number;
  '4': number;
  '5': number;
};

export const getTotalRatingsValue = (ratings: Ratings): number => {
  return (
    ratings['1'] +
    ratings['2'] * 2 +
    ratings['3'] * 3 +
    ratings['4'] * 4 +
    ratings['5'] * 5
  );
};

export const getNumberOfRatings = (ratings: Ratings): number => {
  return Object.values(ratings).reduce((a, b) => a + b);
};

export const getAverageRating = (ratings: Ratings): number => {
  return getTotalRatingsValue(ratings) / getNumberOfRatings(ratings);
};
