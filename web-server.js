var express = require('express');
var moment = require('moment');
var app = express();

app.use(express.static(__dirname + '/public'))

var port = 3000;

// URL branch to get and send username

app.get('/test',function(req,res){
    var username=req.query.username;
    console.log('I have been hit'+username);
    res.send('Hello  '+username);
})

// URL branch to get account number and send account details

app.get('/accounts',function(req,res){
    var acc1=parseInt(req.query.acc1);
    var result=getAccount(acc1)
    res.send('The result is '+result)
})

// Function to select apropriate account from accounts array

var getAccount=function(acc1){
    if (acc1 == 0)
    var result = 'id: '+ accounts[0].id+', name: '+accounts[0].name+', deposit amount: '+accounts[0].deposit;

    else if (acc1 == 1)
    var result = 'id: '+ accounts[1].id+', name: '+accounts[1].name+', deposit amount: '+accounts[1].deposit;

    else if (acc1 == 2)
    var result = 'id: '+ accounts[2].id+', name: '+accounts[2].name+', deposit amount: '+accounts[2].deposit;

    else
    var result = 'there is no account with that ID number.'
    
    return result;

}

// Accounts array

let accounts=[
    {id:1,name:'Alex',deposit:5},
    {id:2,name:'Sarah',deposit:5},
    {id:3,name:'Jim',deposit:15}   
]

/*

What is a linked list?

A linked list is a collection of items of the same type, which connect to each
other via pointers.

Why would you use a linked list instead of an array?

1. Linked lists allow for insertion and deletion of elements over linear time
2. Linked lists allow for n number of items to be stored, even if unknown before
implementation
3. Linked lists allow for insertion of items into the middle of a list

Practical applications of a linked list

A linked list might be preferable over an array for the implementation of queues,
maintaining directories or for mathematical manipulations.

*/

// The class for defining a node of the linked list

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

// The class for defining the linked list

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Function to create an instance of the LinkedList class in the first position

    insertFirst(data) {
    this.head = new Node(data, this.head);
    }

    // Function to get the data for the instance of a LinkedList at a certain index

    getAt(index){
        let current = this.head;
        let count = 0;

        while(current) {
            if(count == index) {
                console.log(current.data);
                return current.data;
            }
            count++;
            current = current.next;
        }
        return null;
    }

    // Function to print data for all instances of the LinkedList class to the console

    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

}

// Instantiating the LinkedList with a constant ll

const ll = new LinkedList();

// Associating ll with data and submitting it into the Linked List

ll.insertFirst({id:4,name:'Tom',deposit:12000});
ll.insertFirst({id:5,name:'Dick',deposit:-23});
ll.insertFirst({id:6,name:'Harry',deposit:8});


// URL branch to get numbers and send the associated LinkedList object at that numbers index

app.get('/linkedlistaccounts',function(req,res){
    var acc1=parseInt(req.query.acc1);
    var result=getLinkedListAccount(acc1);
    res.send('The result is id: '+result.id+', name: '+result.name+', deposit amount: '+result.deposit);
})

// Function to select apropriate account from LinkedList nodes

var getLinkedListAccount=function(acc1){
    if (acc1 == 0)
    var result = ll.getAt(0);

    else if (acc1 == 1)
    var result = ll.getAt(1);

    else if (acc1 == 2)
    var result = ll.getAt(2);

    else
    var result = 'there is no account with that ID number.'
    
    return result;

}

app.listen(port);
console.log('Server listening on: '+port);