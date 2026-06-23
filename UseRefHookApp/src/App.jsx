import {useRef} from "react"
function App(){
   const std=useRef(0);
  let increase=()=>{
           std.current++;
           console.log(std.current);
   }
   return<>
      <button onClick={increase}>Increases</button>
   </>
}
export default App;  