import { useMemo } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

function Publish() {
  const page = useMemo(() => Taro.getCurrentInstance().page, []);

  useDidShow(() => {
    const tabbar = Taro.getTabBar(page);
    tabbar?.setSelected(1);
  });

  return (
    <View>
      <Text>我是发布！</Text>
    </View>
  );
}

export default Publish;
