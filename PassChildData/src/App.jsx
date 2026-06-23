 import React from "react";
 /*
import Child from "./Child"
function App(){
    let GetData=(data)=>{
      console.log(data);
    }
  return<>
       <Child sendData={GetData}/>
      
  </>
}
export default App;*/
import {useState} from "react"
function App(){
         const[count,setCount]=useState(0);
          let IncCount=()=>{
              setCount(count+1);
          };
          return<>
               <h1>Count is :{count}</h1>
               <button onClick={IncCount}>Increase</button>
          </>
}
export default App;
