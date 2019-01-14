//引入http模块
const http = require("http");

//初始化一个变量
let a = 0 ;

//使用http模块搭建node服务器
const server = http.createServer(function(request,response){
	response.setHeader("Content-type","text/plain;charset=utf-8");
	
	let num = parseInt(Math.random()*999);
	if (num ===666) {
		console.log("中奖用户"+request.connection.remoteAddress);
		throw new Errow("错误");
	}
	//输入数字
	response.write(num.toString()+ "【ip】"+request.connection.remoteAddress);
	response.end();
}).listen(8888);


