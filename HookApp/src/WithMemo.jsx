import {useState,useMemo} from "react"
function WithMemo(){
  const[count,setcount]=useState(0);
       const[theme,settheme]=useState(false);
  
       let slowfunct=(num)=>{
           console.log("I am Running..........")
           return num*2;
       }
       let res=slowfunct(count);
      return<>
           <h3>{res}</h3>
           <button onClick={()=>{setcount(count+1)}}>Increment</button><br/><br/>
           <button onClick={()=>{settheme(!theme)}}>ChangeTheme
              
           </button>
        </>
}
export default WithMemo;