const request=require('request')



const forecast=(lat,lon,callback)=>{
    const url='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=35907845a80a9a5cfecf77f9b56f170e&units=metric'
    //const url="http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=35907845a80a9a5cfecf77f9b56f170e&units=metric"

    request({url:url,json:true},(error,response)=>{       
      if(error){
          callback('Unable to connect to weather service!!',undefined)
      }
      else if(response.body.error){
          callback('unable to find location',undefined)
      }
      else{
          callback(undefined,response.body.weather[0].description + ".Its currently "+response.body.main.temp+"*C out there")
      }
    })
}

module.exports=forecast
