<template>
	<div class='textList' @click='touchRight'>
		<div class="textList-left">{{options}}</div>
		<div class="textList-right" :contenteditable="isEdit" @input='change' >{{childNum}}</div>
	</div>
</template>
<script>
	export default {
		props:['options','nums','isEdit','keys'],
		data:function(){
			return {
				childNum:this.nums
			}
		},
		methods:{
			touchRight:function(){
				this.$emit('touchRight')
			},
			change:function(e){
				this.$emit('dataChangeFn',this.keys,e.target.innerText)
			}
		}
	}
</script>
<style scoped lang='sass'>
@import "../../scss/rem" ;
	.textList{height:pxToRem(45px);background: #f0f4f3;margin:5px 0;};
	.textList-left{
		min-width:pxToRem(30px);
		height:pxToRem(45px);
		line-height:pxToRem(45px);
		float:left;
		margin-left: pxToRem(10px);
	}
	.textList-right{
		height:pxToRem(40px);
		width:pxToRem(45px);
		margin:0 pxToRem(10px);
		line-height:pxToRem(45px);
		float:right;
		text-align:center;
	}
</style>