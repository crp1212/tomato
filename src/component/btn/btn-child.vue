<template>
	<div class="btnList" >
		<div>{{options}}</div>
		<div class='btns' :class='{btnOn:isOn, btnOff:isOff}' @click='changeState'></div>
	</div>
</template>
<script>
	export default {
		props: ['options','bool'],
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
			}
		}
	}
</script>
<style scoped>
	.btnList{height:45px;background: #f0f4f3;margin:5px 0;}
		.btnList div:nth-child(1){
			min-width:30px;
			height:45px;
			line-height:45px;
			float:left;
			margin-left: 10px;
		}
		.btns{
			float:right;
			width:45px;
			height:20px;
			border-radius: 10px;
			margin:12px 10px;
		}
		.btnOn{
			background:#00E367;
		}
		.btns:before{
			content:"";
			display:inline-block;
			width:20px;
			height:20px;
			border-radius: 10px;
			background:white;
			position:relative;
			transition: left 0.5s;
		}
		.btnOn:before{
			left:24px;
		}
		.btnOff{
			background: gray;
		}
		.btnOff:before{
			left:0;
		}
</style>