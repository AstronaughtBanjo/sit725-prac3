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

app.get('/accounts',function(req,res){
    var acc1=parseInt(req.query.acc1);
    var result=getAccount(acc1)
    res.send('The result is '+result)
})

var getAccount=function(acc1){
    if (acc1 == 0)
    var result = 'id: '+ accounts[0].id+', name: '+accounts[0].name+', deposit amount: '+accounts[0].deposit;

    else if (acc1 == 1)
    var result = 'id: '+ accounts[1].id+', name: '+accounts[1].name+', deposit amount: '+accounts[1].deposit;

    else if (acc1 == 2)
    var result = 'id: '+ accounts[2].id+', name: '+accounts[2].name+', deposit amount: '+accounts[2].deposit;

    else
    var result = 'there is no account with that ID number.'
    
    return result

}

let accounts=[
    {id:1,name:'Alex',deposit:5},
    {id:2,name:'Sarah',deposit:5},
    {id:3,name:'Jim',deposit:15}   
]


app.listen(port)
console.log('Server listening on: '+port)