import "./Ludo.css";
import{useState} from "react"
function Ludo(){
   let [btn,setbtn]=useState({
       first:0,
       second:0,
       third:0,
       four:0
   })

   let UpdateMoves=()=>{
      btn.first+=1
      console.log(btn.first);
      setbtn({...btn});
   }
    return<>
           <p>Blue Moves={btn.first}</p>
          <button className="btn First" onClick={UpdateMoves}>+1</button>
          <p>Green Moves={btn.second}</p>
          <button className="btn Second">+1</button>
          <p>Yellow Moves :{btn.third}</p>
          <button className="btn Third">+1</button>
          <p>Red Moves:{btn.four}</p>
          <button className="btn four">+1</button>
    </>
}
export default Ludo;