var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/public'))



var adder=function(num1,num2){
    var result = num1+num2;
    return result

}


app.get('/test',function(req,res){
    var username=req.query.username;
    console.log('I have been hit'+username);
    res.send('Hello  '+username);
})

app.get('/adder',function(req,res){
    var num1=parseInt(req.query.num1);
    var num2=parseInt(req.query.num2);
    var result=adder(num1,num2)
    res.send('The result is '+result)
})


app.listen(port)
console.log('Server listening on: '+port)