const mysql = require('mysql')


const db =mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database :'enotes'
})

db.connect((err)=>{
    if (err){console.log("Database not Connected")};
});

module.exports=db;