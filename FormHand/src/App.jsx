import {useState} from "react"
import "./App.css"
function App(){
        
     let[inp,regInp]=useState({
         name:"",
         email:"",
         contact:""
         
     })
    return<>
        <h1>Register Form</h1>
         <input type="text" name="username" value={inp.name} onChange={(e)=>regInp({name:e.target.value})}></input ><br/><br/>
         <input type="text" name="email" value={inp.email} onChange={(e)=>regInp({email:e.target.value})}></input><br/><br/>
         <input type="text" name="contact" value={inp.contact}onChange={(e)=>regInp({contact:e.target.value})}></input><br/><br/>
         <input type="submit" name="" value="Register"></input><br/><br/>

    </>
}
export default App;