<template>
	<div class="errorPage">
		<img src="@/common/asset/images/errorPage.jpg" alt="">
	</div>
</template>

<script>
	export default {
		name : 'errorPage'
	}
</script>

<style lang="scss">
	.errorPage{
		width: 100%;
		height: 100%;
		background: #f1f4f9;
		img{
			@include center('');
		}
	}
</style>