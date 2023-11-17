import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "omo-vitepress",
  // description: "逐一解析vue—elemment-admin的vitepress网站",
  // 干净路由
  cleanUrls: true,
  // md最后修改时间
  lastUpdated: true,
  locales: {
    root: {
      label: "中文",
      lang: "ch",
      link: "/",
    },
    en: {
      label: "English",
      lang: "en", // optional, will be added  as `lang` attribute on `html` tag
      link: "/en/", // default /fr/ -- shows on navbar translations menu, can be external
      // other locale specific properties...
    },
  },
  themeConfig: {
    // 设置logo
    logo: "/favicon.ico",
    //首页配置 https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "文档", link: "/" },
      {
        // text:"语言设置",
        items: [
          { text: "测试一", link: "/" },
          { text: "测试二", link: "/" },
        ],
      },
    ],
    // 侧边栏配置
    sidebar: {
      "/": [
        {
          text: "项目准备",
          // 默认展开侧边栏
          collapsed: false,
          // 添加侧边栏目录
          items: [{ text: "使用概括", link: "/use_scope" }],
        },
      ],
      "/en/": [
        {
          text: "example",
          collapsed: true,
          items: [
            { text: "markdown", link: "/en/markdown-examples" },
            { text: "api", link: "/en/api-examples" },
          ],
        },
      ],
    },
    // 导航栏 github图标
    socialLinks: [{ icon: "github", link: "https://github.com/COWNQ" }],
    // 文档编辑
    editLink: {
      pattern:
        "https://github.com/COWNQ/omo-vitepress__vueelementadmin/tree/main/:path",
      text: "Edit this page on GitHub",
    },
    // 开启模糊搜索
    search: {
      provider: "local",
      // 多语言搜索配置
      options: {
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询结果",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
  },
});
