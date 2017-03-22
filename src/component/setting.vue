<template>
	<div>
		<head-child :title='headContent.title' :option='headContent.option' @headFn='headBtnFn'></head-child>
		<btn-child v-for='item in btnArr' :options='item.option' :bool='item.val'></btn-child>
		<text-child v-for='item in timeArr' :options='item.option' :nums='item.val' isEdit='true'></text-child>
		<text-child v-for='item in countArr' :options='item.option' :nums='item.val' isEdit='false'></text-child>	
	</div>
</template>
<script>
	import btnChild from './btn/btn-child.vue'
	import textChild from "./text/line-text.vue"
	import {settingData,headContentData} from "../storage/data.js"
	import headChild from './text/header-text.vue'
	export default {
		data:function(){
			return {
				btnArr:settingData('btn'),
				timeArr:settingData('time'),
				headContent:headContentData('setting'),
				countArr:settingData('count')
			}
		},
		components:{
			'btn-child':btnChild,
			'text-child':textChild,
			'head-child':headChild,
		},
		methods:{
			headBtnFn:function(){
				console.log('wew')
				alert('保持现有的操作吗')
			}
		}
	}
</script>
<style>
	
</style>