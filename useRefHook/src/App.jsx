import {useRef} from "react"
function App(){
    const name=useRef(0);
      function Increase(){
          name.current++;
            console.log(name.current);
      }
    return<>
       <h1>{name.current}</h1>
       <button onClick={Increase}>Increase</button>
    </>
}
export default App;