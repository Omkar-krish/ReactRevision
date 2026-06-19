import {useState} from "react"
import "./App.css"
function App(){
       let[inp,regInp]=useState({
             first:0,
             second:0,
             result:0
       });
       let SaveData=(e)=>{
                regInp(prev=>{
                     return {...prev,[e.target.name]:e.target.value}
                });
       };
    return<>
            <h1>Calculator </h1>
          <input type="text" placeHolder="Enter The" name="first" value={inp.first} onChange={SaveData}/><br/><br/>
          <input type="text" name="second" value={inp.second} onChange={SaveData}/><br/><br/>
          <input type="text" name="res" value={inp.result}/><br/><br/>

         <input type="button" name="" value="Addition" onClick={() =>
  regInp(prev => {
    return {...prev,
      result: parseInt(inp.first) + parseInt(inp.second)
    };
  })
}
/><br/>
    
    </>
}
export default App;