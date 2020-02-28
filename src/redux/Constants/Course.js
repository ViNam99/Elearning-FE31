const createRequestTypes = (base, act) =>
  ["REQUEST", "SUCCESS", "FAILURE"].reduce((acc, type) => {
    const key = `${act}_${type}`;
    acc[key] = `${base}_${act}_${type}`;
    return acc;
  }, {});

const COURSES_TYPE = {
  ...createRequestTypes("COURSES", "FETCH_LIST")
};
export default COURSES_TYPE;
