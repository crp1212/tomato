<template>
	<div class="container">
		<head-child :title='headContent.title' :option='headContent.option' @headFn='headBtnFn'></head-child>
		<div name="" class="textbox" contenteditable="true" id='ele' placeholder="写下你的计划..." @input='contentChange'>{{content}}</div>
		<div class="expected">
			<span>{{state}}</span>
			<!-- <span contenteditable="true" >{{num}}</span> -->
			<span><input type="text" v-model='num' style="width:200px"></span>
		</div>
	</div>
</template>
<style scoped>
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
input{
	position: relative;
	border:none;
	font-size:20px;
	top:1px;
}
</style>
<script>
	import headChild from './text/header-text.vue'
	import {headContentData,saveData} from "../storage/data.js"
	import time from "../js/time.js"
	export default {
		data:function(){
			return {
				num:1,
				content:"",
				state:"预计",
				headContent:headContentData('edit'),
				temContent:'',
			}
		},
		created:function(){
			/*Bus.$on('editType',function(c){
				console.log('c')
			})*/
		},
		components:{
			'head-child':headChild
		},
		methods:{
			headBtnFn:function(){
				var obj={
					content:this.temContent,
					countNum:this.num,
					startTime:time.getTime(),
					countNumEnd:"0",//默认已完成的数目为0
				}
				saveData(obj,'list');
				history.go(-1)
			},
			contentChange:function(){
				this.temContent=document.getElementById('ele').innerText
			}
		}
	}
</script>