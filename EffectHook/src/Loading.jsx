import {useState,useEffect} from "react"
function Loading(){
    let [load,setload]=useState(false);
    useEffect(function(){
        let time=setTimeout(()=>{
           setload(true)
           console.log("Loading")
        },2000);
        return ()=>clearTimeout(time);
    },[]);
     return <>
         {load?"Welcome To React":"Load........."}
     </>
}
export default Loading;