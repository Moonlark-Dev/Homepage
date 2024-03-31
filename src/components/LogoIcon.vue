<script setup lang="ts">

</script>

<template>
	<el-avatar size="default" src="/assets/logo.png" class="logo"/>
</template>

<style scoped lang="scss">
.center {
	text-align: center;
}

.logo {
	& {
		background-color: #eaeaeaea;
		transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}
	
	&:hover {
		transform: rotate(360deg);
	}
	
}
</style>
