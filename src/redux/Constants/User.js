
const createRequestTypes = (base, act) =>
  ["REQUEST", "SUCCESS", "FAILURE"].reduce((acc, type) => {
    const key = `${act}_${type}`;
    acc[key] = `${base}_${act}_${type}`;
    return acc;
  }, {});

const USER_TYPE = {
  ...createRequestTypes("USER", "FETCH_LIST")
};
export default USER_TYPE;