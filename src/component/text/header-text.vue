<template>
	<div class="header">
		<span>{{title}}</span>
		<span class="right" @click='rightFn'>{{option}}</span>
	</div> 
</template>
<script>
	export default {
		props:['title','option'],
		data:function(){
			return {

			}
		},
		methods:{
			rightFn:function(){
				this.$emit('headFn')
			}
		}
	}
</script>
<style scoped>
.header{height:50px;background: #232323;text-align: center;line-height:50px;color:white;position:fixed;top:0;width:100%;z-index:1;}
.header .right{position:absolute;right:10px;}
</style>