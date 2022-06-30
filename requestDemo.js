var nd = require('needle')
var url = "https://jsonplaceholder.typicode.com/todos/1"

nd.get(url, (err, response, body) => {
     if(err)
         console.log(err)
     else 
         console.log(body)
 })

 var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1Ijoia2lyYW5tYWkxIiwiYSI6ImNsM28wcWFsdjBpZDAzZXBlN3A2MmdtZG0ifQ.RxsXqfC75C3OsTcaRLiFdw"


 nd.get(url, (err, response, body) => {
     if(err)
         console.log(err)
     else 
         console.log(body)
 })


 var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/bhimavaram.json?access_token=pk.eyJ1Ijoia2lyYW5tYWkxIiwiYSI6ImNsM28wcWFsdjBpZDAzZXBlN3A2MmdtZG0ifQ.RxsXqfC75C3OsTcaRLiFdw"


 nd.get(url, (err, response, body) => {
     if(err)
         console.log(err)
     else 
         console.log(JSON.body)
 })

 var url = "http://api.weatherstack.com/current?access_key=7d860276082ba34ab3e369e78a5c90e6&query=New York"

 nd.get(url, (err, response, body) => {
    if(err)
         console.log(err)
     else 
         console.log(body)
 })

 var url = "http://api.weatherstack.com/current?access_key=7d860276082ba34ab3e369e78a5c90e6&query='Bhimavaram'"

 nd.get(url, (err, response, body) => {
     if(err)
         console.log(err)
     else 
         //console.log(body.current.temperature)
         console.log(body.location.lat)
         console.log(body.location.lon)

         var desc=body.current.weather_descriptions
         for(ele in desc)
             console.log(desc[ele])
 })

 var nd=require("needle")
var url="http://api.weatherstack.com/current?access_key=e83f52d59377145e9454f86a580acd02&query='Ongole'"
nd.get(url,(error,response,body)=>{
    if(error)
        console.log(error)
    else{
        console.log(body.current.temperature)
        console.log(body.location.lat)
        console.log(body.location.lon)
        var des=body.current.weather_descriptions
        for(ele in des)
            console.log(des[ele])
    }
})


 var nd = require('needle')
 var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=cbe60b46335276e8249acddb016f5fbf&language=en-US&page=1"
  nd.get(url, (err, response, body)=>{
     if(err){
         console.log(err);
     }else{
       console.log(body);
     }
 })


for(i = 1;i <=10;i++){
    var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=cbe60b46335276e8249acddb016f5fbf&language=en-US&page="+i
    nd.get(url, (err, response, body) =>{
        if(err){
            console.log(err)
        }
        else{
            var results  = body.results
            for(ele in results){
                if(results[ele].original_language = "hi")
                    console.log(results[ele].original_language);
            }
        }
    })}


