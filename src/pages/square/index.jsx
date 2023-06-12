import { useMemo } from "react";
import Taro, { useDidShow, useLoad } from "@tarojs/taro";
import { Swiper, SwiperItem, View, Text } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";
import CardList from "../../components/card-list";

import { useSquareTab, useGetCategoryList } from "./hooks";

import "./index.scss";

function Square() {
  const page = useMemo(() => Taro.getCurrentInstance().page, []);

  useDidShow(() => {
    const tabbar = Taro.getTabBar(page);
    tabbar?.setSelected(0);
  });

  const { current, tabList, toggleTab } = useSquareTab();
  const { categoryList, getCategoryList } = useGetCategoryList();

  useLoad(() => {
    getCategoryList();
  });

  return (
    <View>
      <AtTabs current={current} tabList={tabList} onClick={toggleTab}>
        <AtTabsPane className="category-container" current={current} index={0}>
          <Swiper className="category-item" displayMultipleItems={2}>
            {categoryList.map((item) => (
              <SwiperItem key={item.id}>
                <View className="card">
                  <Text className="name">{item.name}</Text>
                </View>
              </SwiperItem>
            ))}
          </Swiper>

          <View className="card-container">
            <CardList />
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View>标签页三的内容</View>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
}

export default Square;
