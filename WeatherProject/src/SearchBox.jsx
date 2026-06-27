import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import Button from '@mui/material/Button';
import {useState} from "react"
function SearchBox({UpdataeInfo}){
   let [city,setCity]=useState("");
   let[err,seterr]=useState(false);
          const Apiurl ="https://api.openweathermap.org/data/2.5/weather"
         const ApiKey="c93e168257bf28b4f3b6dda18c85829a"
                    let getData=async()=>{
                     try{
                        let response=await fetch(`${Apiurl}?q=${city}&appid=${ApiKey}&units=metric`);
                        let jsonresponse=await response.json();
                        console.log(jsonresponse);
                        let result=
                        {
                                city:jsonresponse.name,
                                temp:jsonresponse.main.temp,
                                feels_like:jsonresponse.main.feels_like,
                                temp_min:jsonresponse.main.temp_min,
                                temp_max:jsonresponse.main.temp_max,
                            descr:jsonresponse.weather[0].description
                          }
                             return result;
                       }
                       catch(err){
                         throw err;
                       }
                    }
      let UniHandler=(evt)=>{
         setCity(evt.target.value);
       }
     let CitySubmit=async (evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newData=await getData();
            console.log(newData);
            UpdataeInfo(newData);
        }
        catch(err){
            seterr(true);
        }
    }
    return<div className="SearchBox">
        <form onSubmit={CitySubmit}>
             <TextField id="city"
                label="city" 
                name="city"
                value={city}
                variant="outlined" 
                onChange={UniHandler}
                required/><br/><br/>
             <Button type="submit" variant="contained">Search</Button>
        </form>
        <p style={{color:"red"}}>{err?"No Such Place Exixt":""}</p>
       
    </div>
}
export default SearchBox;