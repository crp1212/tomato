var sel=(function(){
	var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	//定义常用函数
	var isArraylike=function(collection){
		var length = collection != null && collection.length;
   		return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	};
	var isObject=function(obj){
    	return Object.prototype.toString.call(obj)=='[object Object]'
	};
	var isArray=function(arr){
		return Object.prototype.toString.call(arr)=='[object Array]'	
	}
	var isString=function(str){
		return typeof str=='string'
	}
	var _=function(ele){
		var list=document.querySelectorAll(ele);
		return new List(list)
	};
	//定义类
	var List=function(obj){
		this.nodeList=obj;
	};
	//定义工具函数
	_.each=function(){

	};
	_.isObject=isObject;
	_.isString=isString;
	//具体逻辑
	List.prototype.addEvent=function(type,fn,bool){
		var bool=typeof bool =='boolean'?bool:fasle;
		for(var i=0,len=this.nodeList.length;i<len;i++){
			this.nodeList[i].addEventListener(type,fn,bool)
		}
		return this	
	}
	List.prototype.css=function(x,num){
		var _this=this
		var fn=function(attr,num){
			num=num?num:x[attr]
			for(var j=0,len=_this.nodeList.length;j<len;j++){
					_this.nodeList[j].style[attr]=num;
			}
		}
		if(isObject(x)){
			for(var attr in x){fn(attr)}
		}else{
			fn(x,num)
		}
	}
	return _
})()
export {sel}