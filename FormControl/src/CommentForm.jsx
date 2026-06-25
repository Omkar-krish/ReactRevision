 import {useState} from "react"
 function CommentForm({AddComment}){
     let[formData,setformData]= useState({
        username:"",
        rating:"",
        remark:""
     });
     let formHanler=(event)=>{
         setformData((currData)=>{
            return {...currData,[event.target.name]:event.target.value};
         })
     }
    let handleSubmit=(event)=>{
            event.preventDefault();
             AddComment(formData);
             setformData({
                 username:"",
                rating:"",
                remark:""
             })
          
          console.log(formData);
    }
   return<div>
    <h3>Comments :</h3>
         <label htmlFor="username">UserName :</label>&nbsp;&nbsp;
         <input type="text" id="username" placeholder="Enter The UserName" name="username" onChange={formHanler} value={formData.username}></input><br/><br/>

            <label htmlFor="reamrk">Remark :</label>
             <textArea id="remark" name="remark" value={formData.remark} onChange={formHanler}></textArea><br/><br/>
         <label htmlFor="rating">UserName :</label>&nbsp;&nbsp;
         <input type="number" id="rating" value={formData.rating} placeholder="Enter The RAting" name="rating" min={1} max={5} onChange={formHanler}></input>
          <br/><br/>
         <input type="submit" value="submit" onClick={handleSubmit}></input>
          
   </div>
}
export default CommentForm;