import {useState} from "react"
import {Healper,arrsum,winninhSu} from "./Healper.js"
import Ticket from "./Ticket.jsx"
import "./Lottery.css"
function Lottery({n,win}){
   
       let [ticket,setticket]=useState(Healper(n));
        let winning=winninhSu(ticket);
        let buyNewTic=()=>{
            setticket(Healper(n));
        }
      return<>
          <h1>I am Lottery Game</h1>
          <div id="bt">
                   <Ticket ticket={ticket}/>
          </div>
          <br/><br/>

          <button id="btn" onClick={buyNewTic}>Buy New Ticket
          </button>
          <h3>{winning && "Congrulation You are Won"}</h3>
      </>
}
export default Lottery;