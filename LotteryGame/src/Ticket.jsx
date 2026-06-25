import TicketNum from "./TicketNum";
import "./TicketNum.css"
function Ticket({ticket}){
      return<>
       <div className="ticket">
           {
            ticket.map((val,ind)=>{
                return <TicketNum num={val}/>
            })
          }
       </div>
          
        </>
}
export default Ticket;