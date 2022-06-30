var nd = require('needle')


exports.geoloc=function(townvalue,callbackfunc){
var url = "http://api.weatherstack.com/current?access_key=7d860276082ba34ab3e369e78a5c90e6&query="+townvalue
nd.get(url,(err,response,body)=>{
        if(err)
                callbackfunc(err,null)
        else
                var jasonobj = {"longitude" : body.location.lon, "latitude" : body.location.lat}
                callbackfunc(null,jasonobj)
})
}
