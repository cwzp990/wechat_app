import { useMemo } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

function Square() {
  const page = useMemo(() => Taro.getCurrentInstance().page, []);

  useDidShow(() => {
    const tabbar = Taro.getTabBar(page);
    tabbar?.setSelected(0);
  });

  return (
    <View>
      <Text>我是广场！</Text>
    </View>
  );
}

export default Square;
