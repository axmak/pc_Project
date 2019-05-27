//express模块
const express=require("express");
//mysql模块
const mysql=require("mysql"); 
//创建连接池
const pool = mysql.createPool({
	host:"127.0.0.1",
	user:"root",
	port:3306,
	database:"keep",
	password:""
})
const cors=require("cors");
const session=require("express-session");
//创建express对象
var server=express();
//绑定端口 3030
server.listen(3030);
//指定一个静态目录，保存图片资源，项目中所有的图片都需要放在服务器端
server.use(express.static("public"));
//跨域配置
server.use(cors({
	origin:['http://127.0.0.1:5500','http://127.0.0.1:5501'],
	credentials:true
}));
server.use(session({
	secret:"128位字符串",   //配置密钥
  	resave:false,          //每次请求是否更新数据 
  	saveUninitialized:true //保存初始化数据
}))

//获取用户登录信息
server.get("/login",(req,res)=>{
	var uname=req.query.uname;
	var upwd=req.query.upwd;
	var sql="select uid from keep_user where uname=? and upwd=?"
	pool.query(sql,[uname,upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send({code:1,msg:"登录成功"})
		}else{
			res.send({code:0,msg:"登录失败"})
		}
	})
})

//获取首页首层分享图片
server.get("/car1",(req,res)=>{
	var sql="select * from keep_car1";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})

//获取首页第二层分享图片
server.get("/car2",(req,res)=>{
	var sql="select * from keep_car2";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})

//获取商品列表
server.get("/product",(req,res)=>{
	var sql="select * from keep_product";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})
