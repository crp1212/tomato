<template>
	<div>
		<head-child :title='headContent.title' :option='headContent.option' @headFn='headBtnFn'></head-child>
		<btn-child v-for='item in btnArr' :options='item.option' :bool='item.val' :keys='item.keys' @dataChangeFn='dataChangeFn'></btn-child>
		<text-child v-for='item in timeArr' :options='item.option' :nums='item.val' :keys='item.keys' isEdit='true' @dataChangeFn='dataChangeFn'></text-child>
		<text-child v-for='item in countArr' :options='item.option' :nums='item.val' :keys='item.keys' isEdit='false'></text-child>	
	</div>
</template>
<script>
	import btnChild from './btn/btn-child.vue'
	import textChild from "./text/line-text.vue"
	import {settingData,headContentData} from "../storage/data.js"
	import {sto} from "../storage/storage.js"
	import headChild from './text/header-text.vue'
	import {sel} from "../js/sel.js"
	export default {
		data:function(){
			return {
				btnArr:settingData('btn'),
				timeArr:settingData('time'),
				headContent:headContentData('setting'),
				countArr:settingData('count'),
				temData:{},
			}
		},
		components:{
			'btn-child':btnChild,
			'text-child':textChild,
			'head-child':headChild,
		},
		methods:{
			headBtnFn:function(x,y){
				sel.each(this.temData,(x,y)=>{
					sto(y,x)
				})
			},
			dataChangeFn:function(key,val){
				console.log(key,val)
				this.temData[key]=val
			}
		}
	}
</script>
<style>
	
</style>