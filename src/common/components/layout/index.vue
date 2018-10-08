<template>
	<div>
		<transition name="el-fade-in-linear">
			<router-view v-show="show"></router-view>
		</transition>
	</div>
</template>

<script>
	export default{
		data: () => ({
	    	show: true
	    })
	}
</script>