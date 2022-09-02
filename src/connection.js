let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "seecret",
    database: "java_base"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
})

function account_saving () {
    var obj = {
        name : document.getElementById("name"),
        email : document.getElementById("email"),
        pwd : document.getElementById("pwd"),
        // pswd : document.getElementById("pswd")
    }

    connection.query('INSERT INTO user SET ?', obj, function(err,res){
        if(err) throw err;
        console.log('Last record insert id:', res.insertId);
    });

            
    // return console.log(name, email, pwd);
    // var sql = "INSERT INTO user (username, email, pwd) VALUES (name, email, pwd)";
    // connection.query(sql, function (err, result) {
        // if (err) throw err;
    // });
}

module.exports = connection;