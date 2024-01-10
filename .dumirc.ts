import { defineConfig } from 'dumi';
const repo = 'curry'; // 项目名
export default defineConfig({
  themeConfig: {
    name: 'curry',
    mode: 'site',
    devServer: {
      port: 1998 // 自定义端口号
    }
  },
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  exportStatic: {}
});
