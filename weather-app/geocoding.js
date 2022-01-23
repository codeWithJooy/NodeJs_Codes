const request=require('request')

const url="https://api.mapbox.com/geocoding/v5/mapbox.places/Kolkata.json?access_token=pk.eyJ1IjoiYWJoaW1pY3JvMyIsImEiOiJja3luNTQyaTkwMGllMm5uMmU0ODFobmw4In0.j-ogxXo2qJNPTi--m-Blzg"
request({url:url,json:true},(error,response)=>{
    longitude=response.body.features[0].center[0]
    latitude=response.body.features[0].center[1]

    console.log("longitude:"+longitude)
})