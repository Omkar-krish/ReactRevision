import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import {useState} from "react"
function WeatherApp(){
     let [weather,setWeather]=useState({
            city:"pune",
            temp:34.18,
            feel_like:40.63,
            desc:"broken-cloud",
            temp_max:34.18,
            temp_min:34.18,
     });
     let UpdataeInfo=(newres)=>{
        setWeather(newres);
     }
    return<>
      <h1 style={{textAlign:"center"}}>Weather Prediction</h1>
         <SearchBox UpdataeInfo={UpdataeInfo}/>
         <InfoBox weatherInfo={weather}/>
    </>
}
export default WeatherApp;