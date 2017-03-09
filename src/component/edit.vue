<template>
	<div>
		<div name="" class="textbox" contenteditable="true" placeholder="写下你的计划..."></div>
		<div class="expected">
			<span>预计</span>
			<span contenteditable="true" style="width:200px">{{num}}</span>
		</div>
	</div>
</template>
<style>
.textbox{height:100px;width:100%;;box-sizing: border-box;padding:10px;}
.textbox:empty:before{
    content: attr(placeholder)
}
/*焦点时内容为空*/
.textbox:focus:before{
    content:none;
}
.expected {overflow:hidden;}
.expected span{
	float:left;
	margin: 0 10px;
	height:30px;
	line-height:30px;
}
</style>
<script>
	module.exports={
		data:function(){
			return {
				num:1,
			}
		}
	}
</script>