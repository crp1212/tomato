<template>
	<div class="btnList" >
		<div>{{options}}</div>
		<div class='btns' :class='{btnOn:isOn, btnOff:isOff}' @click='changeState'></div>
	</div>
</template>
<script>
	export default {
		props: ['options','bool','keys'],
		data:function(){
			return {
				isOn:this.bool,
				isOff:!this.bool,
			}
		},
		
		methods:{
			changeState:function(){
				this.isOn=!(this.isOn);
				this.isOff=!(this.isOff);
				this.$emit('dataChangeFn',this.keys,Number(this.isOn))
			},
		}
	}
</script>
<style scoped lang='sass'>
	@import "../../scss/rem" ;
	.btnList{
		height:pxToRem(45px);
		background: #f0f4f3;
		margin:pxToRem(5px) 0;
		div:nth-child(1){
			min-width:pxToRem(30px);
			height:pxToRem(45px);
			line-height:pxToRem(45px);
			float:left;
			margin-left: pxToRem(10px);
		}
	}
		.btns{
			float:right;
			width:pxToRem(45px);
			height:pxToRem(20px);
			border-radius: pxToRem(10px);
			margin:pxToRem(12px) pxToRem(10px);
			&:before{
				content:"";
				display:inline-block;
				width:pxToRem(20px);
				height:pxToRem(20px);
				border-radius: pxToRem(10px);
				background:white;
				position:relative;
				transition: left 0.5s;
			}
		}
		.btnOn{
			background:#00E367;
			&:before{
				left:pxToRem(24px);
			}
		}
		.btnOff{
			background: gray;
			&:before{
				left:0;
			}
		}
</style>