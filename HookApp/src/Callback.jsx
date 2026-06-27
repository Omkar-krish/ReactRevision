import Child from "./Child"
import {useState, useCallback} from "react";
function Callback(){
    let[count,setCount]=useState(0);
      let Abc=useCallback(()=>{
        console.log("I am USeMemo");
      },[]);
     console.log("Paren Render");
    return<>
           <h1>Count :{count}</h1>
          <button onClick={()=>{
            setCount(count+1);
          }}>Increase</button>
          <Child btn={Abc}/>
    </>
}
export default Callback;
