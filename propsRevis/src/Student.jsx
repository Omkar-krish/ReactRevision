import React from "react"
class Student extends React.Component{
    
    render(){
        return<>
           <h1>Hello My Name is {this.props.name}</h1>
        </>
    }
}
export default Student;