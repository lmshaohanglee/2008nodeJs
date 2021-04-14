// 引入mysql模块
let mysql = require('mysql');
// 创建连接
let connection = mysql.createConnection({
    // 主机
    host : 'localhost',
    // 用户名
    user : 'root',
    // 密码
    password : 'root',
    // 数据库
    database : 'vue2008'
})
// 连接
connection.connect();
// 查询的sql语句
let selsql = 'SELECT * FROM p_users LIMIT 2';
connection.query(selsql,function(error,result){
    if(error){
        console.log('error')
    }
    console.log(result)
})