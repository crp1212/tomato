var getTime=function(){
	return new Date().toLocaleString();
}
var getYMD=function(){//获取年月字组成字符串
	var date=new Date();
	return date.getFullYear()+''+date.getMonth()+1+''+date.getDate()
}
export default {
	getTime:getTime,
	getYMD:getYMD,
}