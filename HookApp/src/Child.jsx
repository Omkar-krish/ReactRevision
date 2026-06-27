
import React from "react"
function Child({btn}){
    console.log("Child Render");
    return<>
    <br/><br/><button onClick={btn}>Clcik ME</button>
        
    </>
}
export default React.memo(Child);
