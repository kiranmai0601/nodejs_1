console.log("Example node js application");
console.log("Hello WOrld!");
var a = 2;
var b = 6;
console.log("Addition of a and b is", a + b);
c = 10
console.log(c);
//use library functions


var s = "ahrnmsdmc"
var arr = s.split('')
var sorted = arr.sort()
var new_s = sorted.join('');
console.log(new_s);

var myPenguin = {"name": "Galapagos", 
                "origin": "north",
                "livingArea": "Africa"};
console.log("Hello, I'm a penguin and my name is ", myPenguin.name);

 function verifylogin(user, pwd, callback) {
     if(pwd == "pwd1") {
         callback(null, "correct login")
     }
     else
         callback("incorrect", null)
 }

 verifylogin("user1", "pwd1", function(err, result) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(result);
    }
})


 verifylogin("user1", "pwd1", (err, result) => {
    if(err) {
         console.log("In valid");
     }
     else {
         console.log("valid");
     }
 })


var chalk = require('chalk');
console.log(chalk.blue("Hello"))
console.log(chalk.blue("Hello") + " World" + chalk.red("!"));
console.log(chalk.bgRed("Hii..."));

console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

//get, post requests, delete, put

//libraries for HTTP requests

//1. needle, 2. fetch, 3. axios, 4. got

//status code is 200 if the request is perfectly completed













//settimeout -  it will exwcute after particular time

// console.log("program is starting");

// setTimeout(() => {
//     console.log("inside timeout")
// }, 600)

// console.log("after time out")
// console.log("program ending")

// core modules 
// npm modules
// user modules

// node.js modules -> FileSystem, os, console

// to install a package we use

// npm install cowsay --save

// var cowsay = require('cowsay')
// console.log(cowsay.say({text: "example text"}))