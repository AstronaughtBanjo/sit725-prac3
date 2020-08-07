var express = require('express');
var moment = require('moment');
var app = express();
var cors = require('cors')
app.use(cors())

var port = 4000;


app.use(express.static(__dirname + '/public'))

// Function to add two numbers delivered via the URL

var adder=function(num1,num2){
    var result = num1+num2;
    return result

}

// URL branch to get numbers and send the result of adder

app.get('/adder', function(req,res){
    var num1=parseInt(req.query.num1);
    var num2=parseInt(req.query.num2);
    var result=adder(num1,num2)
    res.send('The result is '+result)
})
  

app.listen(port);
console.log('Server listening on: '+port);