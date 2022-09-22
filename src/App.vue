<!--
 * @Author: GengHH
 * @Date: 2022-08-31 19:03:51
 * @LastEditors: GengHH 18818060415@163.com
 * @LastEditTime: 2022-09-23 00:41:49
 * @Description: file content
 * @FilePath: \vite@3.x-project\src\App.vue
-->
//
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
	<div @click="go">
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" />
	<h3>{{ count }}</h3>
	<van-button type="primary" @click="go">按钮</van-button>
</template>
<script>
import { ref } from 'vue';
// import HelloWorld from "./components/HelloWorld.vue"
export default {
	setup() {
		const count = ref(0);
		const a = ref(0);
		const go2 = () => {
			console.log(123);
			location.href = 'http://127.0.0.1:5173/foo?a=1';
		};
		return { count, a };
	},

	go() {
		location.href = 'http://127.0.0.1:5173/foo?a=1';
	},
	mounted() {
		console.log(this.count); // 0
	},
};
</script>
<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
