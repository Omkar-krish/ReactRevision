import {useState} from "react"
function App(){
     const[count,setCount]=useState(0);
     let incrmentCount=()=>{
         setCount(count+1);
     }
     return<>
        <h1>Count is{count}</h1>
        <button onClick={incrmentCount}>Increment</button>
     </>
}
export default App;