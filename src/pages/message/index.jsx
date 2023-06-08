import { useMemo } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

function Message() {
  const page = useMemo(() => Taro.getCurrentInstance().page, []);

  useDidShow(() => {
    const tabbar = Taro.getTabBar(page);
    tabbar?.setSelected(2);
  });

  return (
    <View>
      <Text>我是消息！</Text>
    </View>
  );
}

export default Message;
