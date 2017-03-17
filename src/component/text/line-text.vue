<template>
	<div class='textList'>
		<div class="textList-left">{{options}}</div>
		<div class="textList-right" contenteditable="true">{{nums}}</div>
	</div>
</template>
<script>
	export default {
		props:['options','nums'],
		data:function(){
			return {
				
			}
		},
	}
</script>
<style scoped>
	.textList{height:45px;background: #f0f4f3;margin:5px 0;};
	.textList-left{
		min-width:30px;
		height:45px;
		line-height:45px;
		float:left;
		margin-left: 10px;
	}
	.textList-right{
		height:40px;
		width:45px;
		margin:0 10px;
		line-height:45px;
		float:right;
		text-align:center;
	}
</style>