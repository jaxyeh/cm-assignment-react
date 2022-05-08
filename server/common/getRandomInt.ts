const getRandomInt = (minValue: number, maValue: number): number => {
  const min = Math.ceil(minValue);
  const max = Math.floor(maValue);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomInt;
