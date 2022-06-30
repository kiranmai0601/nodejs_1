var fs = require('fs')
/*
    fs.readFile("./text.txt", function(err, data) {
     if(err) {
         console.log("Error in reading file")
     }
     else 
         console.log(data)
 }) 

  fs.readFile("./text.txt", "utf8", function(err, data) {
          if(err) {
          console.log("Error in reading file")
      }
      else 
          console.log(data.toUpperCase())
          console.log(data.toLowerCase())
 }) */

 var os = require('os')

//It will give the information of your os

 console.log(os.hostname())
console.log(os.platform())
 console.log(os.version)
 console.log(os.homedir())
console.log(os.totalmem())


 var cowsay = require('cowsay')
 console.log(cowsay.say({text: "example text", e:"%%", T: "**"}))

 var chalk = require('chalk')
 console.log(chalk.blue('Hello') + 'World' + chalk.red('!'))

// user defined modules
var calc = require('./calci')

 console.log(calc.add(5, 4))
 console.log(calc.sub(5, 4))
 console.log(calc.mul(5, 4))
 calc.div(12, 0, (err, result) => {
     if(err)
         console.log(err)
     else
         console.log(result)
 })


var book = {title:"Core Java", author:"Herbert", price:500, publisher:"tata mcgrill", pages:1200}
 var jsonbook = JSON.stringify(book)
console.log(jsonbook)
 var bookobj = JSON.parse(jsonbook)
 for(ele in bookobj){
     console.log(ele);
     console.log(ele+":"+bookobj[ele]);
 }

