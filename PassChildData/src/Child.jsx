import React from "react"
function Child(props){
     let data="Omkar";
    return<>
        <button onClick={()=>props.sendData(data)} style={{width:"400px",height:"40px"}}>SendData</button>
    </>
}
export default Child;