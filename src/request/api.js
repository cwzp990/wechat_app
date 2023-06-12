import request from "./request.js";

const getCategoryList = (data) =>
  request({
    url: "/category/list",
    data,
  });

export { getCategoryList };
