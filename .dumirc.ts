import { defineConfig } from 'dumi';
const repo = 'curry'; // 项目名
export default defineConfig({
  themeConfig: {
    name: 'curry',
    mode: 'site',
    devServer: {
      port: 1998 // 自定义端口号
    },
    base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
    publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  },
});
