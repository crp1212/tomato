<template>
	<div class="container">
		<head-child :title='headContent.title' :option='headContent.option' @headFn='headBtnFn'></head-child>
		<div name="" class="textbox" contenteditable="true" id='ele' placeholder="写下你的计划..." @input='contentChange'>{{content}}</div>
		<div class="expected">
			<span>{{state}}</span>
			<!-- <span contenteditable="true" >{{num}}</span> -->
			<span><input type="text" v-model='num' ></span>
		</div>
	</div>
</template>
<style scoped lang='sass'>
@import "../scss/rem" ;
.textbox{
	height:pxToRem(100px);
	width:100%;
	box-sizing: border-box;
	padding:pxToRem(10px);
	&:empty {
		&:before{
	    	content: attr(placeholder)
		}
	}
	&:focus{/*焦点时内容为空*/
		&:before{
			content:none;
		}
	}
}
.expected {
	overflow:hidden;
	span{
		float:left;
		margin: 0 pxToRem(10px);
		height:pxToRem(30px);
		line-height:pxToRem(30px);
		input{
			width:pxToRem(200px);
		}
	}
}
input{
	position: relative;
	border:none;
	font-size:pxToRem(20px);
	top:pxToRem(1px);
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