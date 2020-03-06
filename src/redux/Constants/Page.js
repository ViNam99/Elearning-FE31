import createRequestTypes from "./request";

const CHANGE_PAGE_TYPE = {
  ...createRequestTypes("PAGE", "CHANGE_PAGE"),
  ...createRequestTypes("PAGE", "PREV_NEXT"),
};
export default CHANGE_PAGE_TYPE;
