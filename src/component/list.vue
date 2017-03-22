<template>
	<div >
		<head-child :title='headContent.title' :option='headContent.option' @headFn='headBtnFn'></head-child>
		<list-child v-for='(item,index) in listArr'  @editStateChild='editStatePar' :content="item.content" :nums='item.nums' @completeFn='completeFn(index)' @touchFn='touchFn(index)' :isRed='doArr[index]' ></list-child>
	</div>
</template>
<style>
	
</style>
<script>
	import headChild from './text/header-text.vue'
	import {headContentData,contentListData,saveData,countAdd} from "../storage/data.js"
	import listChild from './list/list-child.vue'
	import {sel} from '../js/sel.js'
	import {sto} from '../storage/storage.js'
	export default {
		data:function(){
			return {
				listArr:contentListData('list'),
				headContent:headContentData('list'),
				arrs:(()=>{
					var arr=[];
					var len=contentListData('list').length;
					for(var i=0;i<len;i++){arr[i]=i}
					return arr
				})(),
				doArr: (function(){
					return sel.newArr(contentListData('list').length,function(x,y){
								if(sto('planDoing')&&JSON.parse(sto('planDoing')).index==x){this[x]=true}else{this[x]=false}
							})
				})()
			}
		},
		components:{
			'list-child':listChild,
			'head-child':headChild,
		},
		methods:{
			editStatePar:function(){
			},
			headBtnFn:function(){//右侧按钮执行函数
				location.href=location.href.replace("/list","/edit");
				console.log(this.doArr)
			},
			completeFn:function(index){
				saveData({},'listEnd',this.arrs[index]);//更新存储的未完成数据
				sto('planDoing',"");
				for(var i=index,len=this.arrs.length;i<len;i++){//由于清楚操作再本页面只是隐藏,固需要处理使得每次index对应的存储数据的索引没错
					this.arrs[i]=this.arrs[i]-1
				}
				console.log(index,this.arrs[index])
				countAdd();
			},
			touchFn:function(index){
				this.doArr=this.doArr.map(function(x,y){
					if(y==index){return true}else{return false}
				})
				var obj={
					"index":this.arrs[index]
				}
				sto('planDoing',JSON.stringify(obj))//保存正在进行的索引
			}
		}
	}
</script>