// Include request Module



var nd = require('needle')

exports.getWeatherInfo=function(location,callbackfunc){
var url = "http://api.weatherstack.com/current?access_key=7d860276082ba34ab3e369e78a5c90e6&query="+location
nd.get(url,(err,response,body)=>{
    if(err)
        callbackfunc(err,null)
    else
        callbackfunc(null,body.current.temperature)
})}