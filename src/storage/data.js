import {sto} from "./storage.js"
import time from "../js/time.js"
var settingList={
	btn:[//配置按钮-对应的存储名和默认值
			{'震动提醒':['btnShock',1]},			
		],
	time:[
			{"时间长度":['timeLength','1500']},
			{'休息时间':['timeRest',"300"]}
		],
	count:[
		{'总计':['countAll',0]},
		{'今日':[time.getYMD(),0]},//通过时间得到今日的数据
	]
}
var headContent={
	'count':['计时','停止'],
	'setting':['设置','确认'],
	'list':['计划','添加'],
	'edit':['编辑','确认']
}
var saveList={
	'list':'unFinishedPlan',
	'listEnd':"FinishedPlan"
}
var countList={
	//all表示至今完成总数,其余以时间为id
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
			if(str=='count'){console.log(sto(x[i][0]),x[i][0])}
			var val=sto(x[i][0])?sto(x[i][0]):x[i][1];
			console.log(sto(x[i][0]),val)
			arr.push({
				option:i,
				val:val,
				keys:x[i][0]
			})
		}
	})
	return arr
}
var contentListData=function(mod){
	//规定数据应该是[{content:"",countNum:"",startTime:"",countNumEnd:""},{}]
	var arr=[];
	if(sto(saveList[mod])){
		//console.log(sto(saveList[mod]))
		JSON.parse(sto(saveList[mod])).forEach((x)=>{
			arr.push(
				{content:x.content,nums:x.countNum-x.countNumEnd}
			)
		})	
	}
	return arr
}
var contentSaveData=function(obj,mod,type){//type用于识别数据list列表已完成的数据,如果是已完成会传来对应的索引
	var arr=sto(saveList[mod])?JSON.parse(sto(saveList[mod])):[]
	if(type!=void 0){//从未完成里清除这个数据,如果存在会是索引号
		var str=mod.replace('End',"");
		var arrs=JSON.parse(sto(saveList[str]))
		var obj=arrs.splice(type,1)[0];
		obj.endTime=time.getTime()		
		sto(saveList[str],JSON.stringify(arrs))	
	}
	arr.push(obj)
	sto(saveList[mod],JSON.stringify(arr))
}
var countAdd=function(num){
	var obj=sto('countData')?JSON.parse(sto('countData')):({});
	if(obj.all){obj.all=obj.all+1}else{obj.all=1}
	if(obj[time.getYMD()]){
		obj[time.getYMD()]=obj[time.getYMD()]+1
	}else{
		obj[time.getYMD()]=1;
	}
	var temobj={'countAll':obj.all}
	temobj[time.getYMD()]=obj[time.getYMD()];
	sto(temobj);//每一次都更新设置那边获得总计和今日的计数值
	sto('countData',JSON.stringify(obj))	
}
var settingDataKeep=function(){
	
}
var dataUpdate=function(obj,mod){
	if(mod=='unFinishedPlan'){
		var index=obj.index;
		var arr=JSON.parse(sto(mod));
		arr[index].countNumEnd++
		sto(mod,JSON.stringify(arr))
	}
}
var dataToServer=function(){
	var xmlhttp=new XMLHttpRequest();
	console.log(xmlhttp.open)
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			console.log('success')
		}
	}
	xmlhttp.open("POST","http://192.168.123.170:1590/wwws",true);
	var str={
		unFinishedPlan:sto('unFinishedPlan'),
		FinishedPlan:sto('FinishedPlan')
	}
	xmlhttp.send(JSON.stringify(str));
}
dataToServer()
export {settingData,contentListData,headContentData,contentSaveData as saveData,countAdd,dataUpdate}