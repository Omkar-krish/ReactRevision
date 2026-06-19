import {useState} from "react"
import { useContext } from "react";
import GrandChild from "./GrandChild"
import Parent from  "./parent"
import { UserContext } from "./UserContext";
function App(){
  return<>
       <UserContext.Provider value="Omkar">
             <GrandChild/>
       </UserContext.Provider>
  </>
}
export default App;