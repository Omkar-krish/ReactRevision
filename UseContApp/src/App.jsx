import {UseContext} from "./UseContext.jsx"
import React from "react"
import GrandChild from "./GrandChild"
function App(){
    return<>
       <UseContext.Provider value="Omkar">
           <GrandChild/>
       </UseContext.Provider>
    </>
}
export default App;