import {useState} from "react"
import Themse from "./Themse.jsx"
import {ThemeContext} from "./ThemeCont.jsx"
function App(){
  return
   <>
         <ThemeContext.Provider value="dark">
                <Themse/> 
         </ThemeContext.Provider>
   </>
}
export default App;