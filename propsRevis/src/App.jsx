import React from "react"
import Student from "./Student"
class App extends React.Component{
     constructor(props){
          super(props);
          this.state={
              count:0
          }
    }
    increment=()=>{
             this.setState({
              count:this.state.count-1
             }
            );
    };
  render(){
    return<>
        <h1>Count is :{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
    </> 
  }
}
export default App;