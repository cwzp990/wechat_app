import { useState } from "react";
import Taro from "@tarojs/taro";
import { AtTabBar } from "taro-ui";

import "./index.scss";

function CustomTabBar() {
  const [current, setCurrent] = useState(0);

  const switchTab = (value) => {
    setCurrent(value);
    const url = [
      "/pages/square/index",
      "/pages/publish/index",
      "/pages/message/index",
      "/pages/my/index",
    ][value];
    if (url) {
      Taro.switchTab({ url });
    }
  };

  return (
    <AtTabBar
      fixed
      tabList={[
        { title: "广场", iconType: "iconfont icon-square" },
        { title: "发布", iconType: "iconfont icon-publish" },
        { title: "消息", iconType: "iconfont icon-message" },
        { title: "我的", iconType: "iconfont icon-my" },
      ]}
      onClick={switchTab}
      current={current}
    />
  );
}

export default CustomTabBar;
