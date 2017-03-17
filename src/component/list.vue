<template>
	<div >
		<head-child :title='headContent.title' :option='headContent.option' @headFn='headBtnFn'></head-child>
		<list-child v-for='item in listArr'  @editStateChild='editStatePar' :content="item.content" :nums='item.nums'></list-child>
	</div>
</template>
<style>
	
</style>
<script>
	import headChild from './text/header-text.vue'
	import {headContentData,contentListData} from "../storage/data.js"
	import listChild from './list/list-child.vue'
	export default {
		data:function(){
			return {
				listArr:contentListData('list'),
				headContent:headContentData('list')
			}
		},
		components:{
			'list-child':listChild,
			'head-child':headChild,
		},
		methods:{
			editStatePar:function(){
				Bus.$emit('editType','123')
			},
			headBtnFn:function(){//右侧按钮执行函数
				location.href=location.href.replace("/list","/edit");
			}
		}
	}
</script>