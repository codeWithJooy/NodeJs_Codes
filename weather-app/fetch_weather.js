const request=require('request')

const url="http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=35907845a80a9a5cfecf77f9b56f170e&units=metric"

// request({url:url,json:true},(error,response)=>{
//     console.log(response.body.main)
// })

//Task of Print description Its currently temp out there.
request({url:url,json:true},(error,response)=>{
   console.log(response.body.weather[0].description + ".Its currently "+response.body.main.temp+" out there")


});