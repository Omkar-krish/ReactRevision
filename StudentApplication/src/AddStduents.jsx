import {useState} from "react";
import "./App.css"
function AddStduents(){
      let[Student,setStudent]=useState({
          id:"",
          name:"",
          course:"",
          fees:""
      });
      let [Students,setStudents]=useState([]);
      let UniHander=(e)=>{
              setStudent({...Student,[e.target.name]:e.target.value});
      }
      let SubmitCont=()=>{
         setStudents([...Students,Student]);
         setStudent({
          id:"",
          name:"",
          course:"",
          fees:""
         });
      }
     return<>
      <h1>Student Application Form</h1>
      <input type="text" name="id" value={Student.id}placeHolder="Enter The Student ID" onChange={UniHander}></input><br/><br/>


       <input type="text" name="name" value={Student.name}placeHolder="Enter The Student Name" onChange={UniHander}></input><br/><br/>


      <input type="text" name="course" value={Student.course}placeHolder="Enter The Student Course" onChange={UniHander}></input><br/><br/>

      <input type="text" name="fees" value={Student.fees}placeHolder="Enter The Course Fees" onChange={UniHander} ></input><br/><br/>

      <input type="submit" value="AddStudent" name="s" style={{backgroundColor:"blue",color:"white"}}onClick={SubmitCont} ></input>
       
       <h2>Student List</h2>
       <table>
           <thaed>
            <tr>
                <th>StudentID</th>
               <th>Student Name</th>
               <th>Student Course</th>
               <th>Student Fees</th>
            </tr>
             
           </thaed>
            <tbody>
              {
                Students.map((std)=>{
                    <tr><td>{std.name}</td></tr>  
                })
              }  
            </tbody>
             
       </table>
        
        
     </>
     
}
export default AddStduents;
              