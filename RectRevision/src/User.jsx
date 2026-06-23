import React from "react"
function User(props){
   return<>
        <h1 style={{color:props.color}}>Hello My Name is {props.username}</h1>
   </>
}
export default User;