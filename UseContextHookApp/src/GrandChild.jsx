import {useContext} from "react";
import {UserContext} from "./UserContext.jsx";

function GrandChild(props){
       let data =useContext(UserContext)
      return<>
         <h1>Hello:{data}</h1>
      </>
}
export default GrandChild;