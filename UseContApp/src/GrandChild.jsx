import {useContext} from "react";
import {UseContext} from "./UseContext.jsx";
import React from "react"
function GrandChild(){
       let data=useContext(UseContext)
        return<>
              <h1>Hello{data}</h1>
        </>
}
export default GrandChild;