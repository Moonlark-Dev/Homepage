<script setup lang="ts">

import MenuBar from "./components/MenuBar.vue";
import LogoIcon from "./components/LogoIcon.vue";
</script>

<template>
	<div style="width: 100%;">
		<MenuBar/>
		<div style="display: flex; justify-content: center; margin-top: 4rem;">
			<LogoIcon :size="250"/>
		</div>
		<div style="display: flex; justify-content: center;">
			<h1 style="background-clip: text; color: transparent; background-image: linear-gradient(rgb(31, 163, 255), rgb(174 178 182));">Moonlark</h1>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>
