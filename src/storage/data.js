import {sto} from "./storage.js"
var settingList={
	btn:[
			{'震动提醒':['btnShock',true]},			
		],
	time:[
			{"时间长度":['timeLength','1500']},
			{'休息时间':['timeRest',"300"]}
		],
}
var headContent={
	'count':['Count','stop'],
	'setting':['Setting','confirm'],
	'list':['Schedule','add'],
	'edit':['Edit','confirm']
}
var saveList={
	'list':'unFinishedPlan',
}
var headContentData=function(str){
	return {
		title:headContent[str][0],
		option:headContent[str][1]
	}
}
var settingData=function(str){	
	var arr=[]
	settingList[str].forEach((x)=>{
		for(var i in x){
			var val=sto(x[i][0])?sto(x[i][0]):x[i][1];
			arr.push({
				option:i,
				val:val
			})
		}
	})
	return arr
}
var contentListData=function(mod){
	//规定数据应该是[{content:"",countNum:"",startTime:"",endTime:""},{}]
	var arr=[];
	if(sto(saveList[mod])){
		
		JSON.parse(sto(saveList[mod])).forEach((x)=>{
			arr.push(
				{content:x.content,nums:x.countNum}
			)
		})	
	}
	return arr
}
var saveData=function(obj,mod){
	var arr=sto(saveList[mod])?JSON.parse(sto(saveList[mod])):[]
	arr.push(obj)
	sto(saveList[mod],JSON.stringify(arr))
}
export {settingData,contentListData,headContentData,saveData}