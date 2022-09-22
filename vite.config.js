/*
 * @Author: GengHH
 * @Date: 2022-08-31 19:03:51
 * @LastEditors: GengHH 18818060415@163.com
 * @LastEditTime: 2022-09-23 00:49:22
 * @Description: file content
 * @FilePath: \vite@3.x-project\vite.config.js
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { visualizer } from 'rollup-plugin-visualizer';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [VantResolver()],
		}),
		visualizer({
			open: true, //注意这里要设置为true，否则无效
			gzipSize: true,
			brotliSize: true,
		}),
	],
	proxy: {
		// 字符串简写写法
		'/foo': 'http://localhost:4567',
	},
});
