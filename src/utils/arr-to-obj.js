export const ArrayToObj = (arr, key) => {
  return arr.reduce((acc, curr) => {
    console.log(acc, curr[key]);
    return { ...acc, [curr[key]]: { ...curr } };
  }, {});
};
