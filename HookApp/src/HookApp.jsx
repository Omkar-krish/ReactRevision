import {useState} from "react"
function HookApp(){
     const[count,setcount]=useState(0);
     const[theme,settheme]=useState(false);

     let slowfunct=(num)=>{
         console.log("I am Calcuating")
     }
     const res=slowfunct(count)
    return<>
        <h2>{count}</h2>
         <h3>{res}</h3>
         <button onClick={()=>{setcount(count+1)}}>Increment</button>
         <button onClick={()=>{settheme(!theme)}}>ChangeTheme
            
         </button>
    </>
}
export default HookApp;