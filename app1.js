// var calc = require('./calci')
var geoloc = require('./utils/geoloc')
var weatherinfo = require('./utils/weatherinfo')

geoloc.geoloc("Bhimavaram",function(error,locjson){
    if(error){
        console.log(error)
    }
    else{
        console.log("Bhimavaram Longitude:"+locjson.longitude+" Latitude:"+locjson.latitude)
        
    }
})

weatherinfo.getWeatherInfo("Bhimavaram",function(error,temperatureinfo){
            if(error){
                console.log(error)
            }
            else{
                console.log("Current Temperature in Bhimavaram:"+temperatureinfo)
            }
        
})





