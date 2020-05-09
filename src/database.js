const mysql = require('mysql');


const mysqlConnection = mysql.createConnection({
    host: '172.19.0.2',
    user: 'root',
    password: 'a18NeiGutCha@',
    database: 'RE_FIND'
});

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Db is connected');
    }
});

module.exports = mysqlConnection;