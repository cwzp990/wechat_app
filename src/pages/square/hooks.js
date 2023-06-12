import { useState } from "react";

export const useSquareTab = () => {
  const [current, setCurrent] = useState(0);

  const tabList = [
    { title: "所有服务" },
    { title: "在提供" },
    { title: "正在找" },
  ];

  const toggleTab = (value) => {
    setCurrent(value);
  };

  return {
    current,
    tabList,
    toggleTab,
  };
};

export const useGetCategoryList = () => {
  const [categoryList, setCategoryList] = useState([
    {
      id: "1",
      name: "保洁",
    },
    {
      id: "2",
      name: "汽修",
    },
    {
      id: "3",
      name: "疏通",
    },
  ]);

  const getCategoryList = () => {
    getCategoryList;
  };

  return {
    categoryList,
    getCategoryList,
  };
};
