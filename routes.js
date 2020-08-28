var express = require("express");
var sql = require ('mssql');
var router = express.Router();

/*router.get("/", function(req,res){
    res.render("index");
});*/

const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
    connectionLimit: 10,

    options: {
        encrypt: false 
    }
};


router.get('/', function(req, res, next) {
    sql.connect(config).then(() => {
        return sql.query`select * from currency`
    }).then(result => {
        console.log(result)

        res.render('index', {dropdownVals: result})
    }).catch(err => {
        console.log(err)
    })
  });

module.exports = router;