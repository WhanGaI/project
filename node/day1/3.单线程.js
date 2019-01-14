//引入http模块
const http = require("http");

//初始化一个变量
let a = 0 ;

//使用http模块搭建node服务器
const server = http.createServer(function(request,response){
	a++;
	//设置字符编码
	response.setHeader("Content-type","text/plain;charset=utf-8");
	response.write(a.toString());
	response.end();
	
	
}).listen(8888);


