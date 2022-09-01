/*
 * @Author: GengHH
 * @Date: 2022-08-31 19:03:51
 * @LastEditors: GengHH
 * @LastEditTime: 2022-08-31 19:25:53
 * @Description: file content
 * @FilePath: \vite@3.x-project\vite.config.js
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [VantResolver()],
		}),
	],
});
