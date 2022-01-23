const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
geocode('Patna',(error,data)=>{
    if(error){
        console.log(error)
        return
    }
    forecast(data.latitude,data.longitude,(error,fetchdata)=>{
        console.log(error)
        console.log(fetchdata)
      })
  })

