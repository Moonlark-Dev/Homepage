<script setup lang="ts">
import MenuBar from "./components/MenuBar.vue";
import LogoIcon from "./components/LogoIcon.vue";
import PeopleTable from "./components/PeopleTable.vue";
import Typed from "typed.js";
import { onMounted } from "vue";

onMounted(
	() => {
		new Typed(
			'.app .moonlark-name',
			{
				strings: ["Moonlark"],
				typeSpeed: 50,
				backSpeed: 20,
				backDelay: 2000,
				startDelay: 1000,
				loop: true,
				showCursor: false,
				smartBackspace: true,
			}
		);
	}
);
</script>

<script lang="ts">

</script>

<template>
	<div class="app" style="width: 100%;">
		<MenuBar/>
		<div style="display: flex; justify-content: center; margin-top: 4rem;">
			<LogoIcon :size="250"/>
		</div>
		<div style="display: flex; justify-content: center;">
			<h1 class="moonlark-name moonlark-text">&nbsp;</h1>
		</div>
		<div style="text-align: center; margin-top: 40vh;">
			<el-divider/>
			<PeopleTable/>
		</div>
	</div>
</template>

<style lang="scss">
.moonlark-text {
	background-clip: text; color: transparent; background-image: linear-gradient(rgb(31, 163, 255), rgb(174 178 182));
}
</style>

<style scoped lang="scss">

</style>
