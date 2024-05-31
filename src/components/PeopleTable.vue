<script setup lang="ts">
const mapper = ({ character, manager, other }) => ({ character, manager, other: other.join(", ") });
const dataMoonlark = [
  {"character": "审核", "manager": "@chun-awa", "other": ["@montmorill", "@XieXiLin2", "@YifanZhuZhu(文本)"]},
  {"character": "策划", "manager": "@YifanZhuZhu", "other": ["@This-is-XiaoDeng", "@chun-awa", "85"]},
  {"character": "开发", "manager": "@This-is-XiaoDeng", "other": ["@xxtg666", "@chun-awa"]},
  {"character": "管理", "manager": "@xxtg666", "other": ["@This-is-XiaoDeng"]},
  {"character": "运维", "manager": "@This-is-XiaoDeng", "other": ["@chun-awa"]},
  {"character": "本地化", "manager": "@This-is-XiaoDeng", "other": ["@YifanZhuZhu"]},
  {"character": "客服", "manager": "@chun-awa", "other": []},
  {"character": "美术", "manager": "85", "other": []}
].map(mapper);
const dataXDbot2 = [
	{"character": "开发", "manager": "@xxtg666", "other": ["@This-is-XiaoDeng", "@ShirasawaTopaz"]},
	{"character": "审核", "manager": "@xxtg666", "other": ["@XieXiLin2"]},
	{"character": "管理", "manager": "@This-is-XiaoDeng", "other": ["@xxtg666"]},
	{"character": "运维", "manager": "@This-is-XiaoDeng", "other": ["@chun-awa"]},
	{"character": "策划", "manager": "@xxtg666", "other": []}
].map(mapper);
const dataMoonlarkWiki = [
	{"character": "策划", "manager": "@This-is-XiaoDeng", "other": ["@YifanZhuZhu", "@chun-awa"]},
	{"character": "管理", "manager": "@This-is-XiaoDeng", "other": ["@xxtg666"]},
	{"character": "运维", "manager": "@This-is-XiaoDeng", "other": ["@chun-awa"]},
	{"character": "美术", "manager": "85", "other": []}
].map(mapper);
const dataHomepage = [
	{"character": "开发 & 运维", "manager": "@WowStarWorld", "other": ["@This-is-XiaoDeng"]},
	{"character": "美术", "manager": "85", "other": []}
].map(mapper);
</script>

<template>
	<h1>成员与角色</h1>
	<h1 class="moonlark-text">Moonlark</h1>
	<h3>总负责人：@This-is-XiaoDeng</h3>
	<el-table :data="dataMoonlark" style="width: 100%">
		<el-table-column prop="character" label="角色"/>
		<el-table-column prop="manager" label="主管"/>
		<el-table-column prop="other" label="其他成员" />
	</el-table>
	<h1 class="moonlark-text">XDbot2</h1>
	<h3>总负责人：@xxtg666</h3>
	<el-table :data="dataXDbot2" style="width: 100%">
		<el-table-column prop="character" label="角色"/>
		<el-table-column prop="manager" label="主管"/>
		<el-table-column prop="other" label="其他成员" />
	</el-table>
	<h1 class="moonlark-text">Moonlark Wiki</h1>
	<h3>总负责人：@This-is-XiaoDeng</h3>
	<el-table :data="dataMoonlarkWiki" style="width: 100%">
		<el-table-column prop="character" label="角色"/>
		<el-table-column prop="manager" label="主管"/>
		<el-table-column prop="other" label="其他成员" />
	</el-table>
	<h1 class="moonlark-text">Homepage</h1>
	<h3>总负责人：@WowStarWorld</h3>
	<el-table :data="dataHomepage" style="width: 100%">
		<el-table-column prop="character" label="角色"/>
		<el-table-column prop="manager" label="主管"/>
		<el-table-column prop="other" label="其他成员" />
	</el-table>
</template>

<style scoped lang="scss">

</style>
