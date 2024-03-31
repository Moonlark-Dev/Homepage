<template>
	<el-menu
		class="el-menu-demo"
		mode="horizontal"
		@select="onSelect"
		:ellipsis="false"
	>
		<el-menu-item index="icon">
			<template #title>
				<LogoIcon :size="'large'"/>
				<span style="padding-left: 1em;"/>
				<span style="color: #000000;">
					<span>M</span>
					<span style="text-decoration-color: #1fa3ff; text-decoration-line: grammar-error;">oo</span>
					<span>n</span>
				</span>
				<span style="color: #1fa3ff;">
					lark
				</span>
			</template>
		</el-menu-item>
		<div class="flex-grow" />
		<el-menu-item index="github">
			<i class="fab fa-github fa-2x"/>
		</el-menu-item>
	</el-menu>
</template>

<script lang="ts" setup>
import LogoIcon from "./LogoIcon.vue";

const onSelect = (key: string) => {
	if (key == "github") location.href = "https://github.com/Moonlark-Dev";
};

</script>

<style scoped lang="scss">
.flex-grow {
	flex-grow: 1;
}
</style>
