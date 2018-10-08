<template>
	<div class="header">
		<div class="logo">
			<img src="@/common/asset/images/logo.png" alt="企业logo">
		</div>
		<e-nav></e-nav>
	</div>
</template>

<script>
	import ENav from './nav';

	export default {
		components: {
			ENav
		}
	}
</script>

<style lang="scss">
	.header{
		height: 72px;
		width: 100%;
		background: #e3eaf3;
		img{
			margin: 10px 0 10px 16px;
			width: 200px;
			height: 52px;
			display: inline-block;
		}
	}

	.logo{
		width: 216px;
		float: left;
	}
</style>