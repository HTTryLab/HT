/*本类负责对图灵机器人api的调用*/


//避包写法，（其实就是调用匿名函数）为了避免jQuery冲突  列：var a = (function(a){ console.log(a+1);})(5)  那么此时 a的值为6
var RobotAPI = (function($){
	var RobotAPIClass = function(){}
	RobotAPIClass.prototype = {
		
		robotTalk:function(message,callback){
			var data = {
				key:"fb6b7bcfbe52fccdb7f5d752a3088f75", 
				info:message
			}
			
			$.ajax({
				//服务器返回的数据类型
				dataType: "json",
				//请求方式
				type:"get",
				//发送请求的地址
				url:"http://www.tuling123.com/openapi/api",
				//向服务器发送的数据
				data:data,
				//请求成功后的回调函数
				success:function(res){
					
					if(res.code == 100000)
					{
						callback(res.text);
					}else{
						
						alert("请求错误,错误代码为:"+res.code);
					}

				}
			});
			
		}
     
		
	}
	return RobotAPIClass;
})(jQuery)

//var robotAPI =new RobotAPI();

//robotAPI.robotTalk("你好",function(res){
//	console.log(res);
//});
