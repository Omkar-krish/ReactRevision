import Lottery from "./Lottery.jsx";
import Ticket from "./Ticket.jsx"
import{winninhSu} from "./Healper.js"
function App(){
  return<>
         <h1>Ticket is:</h1>
         <Lottery n={3} win={winninhSu}/>
  </>
}
export default App;