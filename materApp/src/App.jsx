import React from "react"
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import {useState,useEffect} from "react"
function App(){
     const[count,setCount]=useState(0);
     let increment=()=>{
           setCount(count+1);
      }
      useEffect(function(){
               console.log("This is Side Effect")
      })
  return<>
    <h3>Count :{count}</h3>
     <Button variant="text" style={{width:"400px",height:"50px",backGroundColor:"red"}} onClick={increment}>+1</Button>       
  </>
}
export default App;