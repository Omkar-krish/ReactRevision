import ThemeCont from "./ThemeCont"
import {useState} from "react"
function Themese()
{ 
    const theme=useState(ThemeCont);
    return<>
            <h1>Current Theme :{theme}</h1>
      </>
}
export default Themese;