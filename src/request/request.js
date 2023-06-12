import Taro from "@tarojs/taro";

const baseUrl = "";
const contentType = "application/json";
const token = "";

function request(params, method = "GET") {
  const { url, data } = params;
  return Taro.request({
    url: baseUrl + url,
    data,
    method,
    header: { "content-type": contentType, token },
    success: (res) => {
      if (res.statusCode === 200) {
        Taro.atMessage({
          message: "请求成功",
          type: "success",
        });

        return res.data;
      } else {
        Taro.atMessage({
          message: "请求失败",
          type: "error",
        });

        return;
      }
    },
    fail: (err) => {
      Taro.atMessage({
        message: err.message,
        type: "error",
      });
    },
  });
}

export default request;
