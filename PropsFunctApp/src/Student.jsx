import {useState} from "react"

function Student(props){
    return<>
        <h1>Student name is :{props.name}</h1>
        <h1>Student Email is :{props.email}</h1>
    </>
}
export default Student;