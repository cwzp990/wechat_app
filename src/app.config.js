export default defineAppConfig({
  pages: [
    "pages/square/index",
    "pages/publish/index",
    "pages/message/index",
    "pages/my/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  usingComponents: {},
  tabBar: {
    custom: true,
    color: "#000",
    selectedColor: "#ffaa20",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/square/index",
        text: "广场",
      },
      {
        pagePath: "pages/publish/index",
        text: "发布",
      },
      {
        pagePath: "pages/message/index",
        text: "消息",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
      },
    ],
  },
});
