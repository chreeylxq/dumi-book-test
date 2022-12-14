import { defineConfig } from 'dumi';

const repo = 'dumi-book-test'; //项目名

export default defineConfig({
  title: '一只羊',
  mode: 'site',
  // more config: https://d.umijs.org/config

  devServer: {
    port: 1998, // 自定义端口号
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  locales: [['zh-CN', '中文']],
  navs: [null],
});
