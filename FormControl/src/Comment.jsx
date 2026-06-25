import {useState} from "react"
import CommentForm from "./CommentForm"
import "./Comment.css";
function Comment(){
  let [comment,setComment]=useState([{
    username:"omkar",
    rating:5,
    remark:"Good"
  }]);
    let AddComment=((comment)=>{
          setComment((currcom)=>[...currcom,comment]);
          console.log("Added New Comment");
    });
    return<>
            {
              comment.map((predata)=>{
                return(
                <div className="Comment">
                      <span>{predata.username}</span><br/>
                      <span>{predata.rating}</span><br/>
                      <span>{predata.remark}</span>
                </div>
                );
              })
            }
      
      
        <CommentForm AddComment={AddComment}/>
    </>
}
export default Comment;