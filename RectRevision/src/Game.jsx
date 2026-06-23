import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Game(){
     let [todo,settodo]=useState([
        {task:"sample",id:uuidv4(),
            isDone:false
        }
    ]); 
     let [newtodo,setnewtodo]=useState([]);
     
     let uniHandler=(e)=>{
         setnewtodo(e.target.value);
     }
     let AddTask=()=>{
         settodo((prev)=>{
            return[...prev,{task:newtodo,id:uuidv4(),isDone:false}]
         });
     }
     {
        
     }
     let deleteElem=(id)=>{
        console.log(todo);
         let res=todo.filter((sid)=>{
            return sid.id!=id
        });
        settodo(res);
     }
     let toUpperCase=()=>{
        let netodo=todo.map((pre)=>{
                return {...pre,task:pre.task.toUpperCase(),
                  }
         });
         console.log(netodo);
         settodo(netodo);
     }
     let UpperCase=(id)=>{
        let newArr=todo.map((tids)=>{
                if(tids.id===id){
                    return {...tids,task:tids.task.toUpperCase()}
                }
                else{
                    return tids;
                }
        });
        settodo(newArr);
     }
     let IsDone=(id)=>{
          let newArr=todo.map((sid)=>{
                   if(sid.id===id){
                    return{...sid,isDone:true}
                   }
                   else{
                     return sid
                   }
          });
          settodo(newArr);
     }

     return<>

           <h3>To Do List APP</h3>
             <input type="text" name="name" placeholder="Enter The SomeThings" value={newtodo} onChange={uniHandler}></input><br/><br/>

             <button onClick={AddTask}>Add Task</button>
           <ul>
               {
                  todo.map((res)=>
                      <li key={res.id}>{res.task}--{res.id}
                        &nbsp;&nbsp;&nbsp;
                         <button onClick={()=>deleteElem(res.id)}>Delete</button> &nbsp;&nbsp;&nbsp;
                          <button onClick={()=>UpperCase(res.id)}>UpperCaseOne</button>
                          &nbsp;&nbsp;&nbsp;
                           <button style={res.isDone?{color:"red"}:{color:"blue"}}onClick={()=>IsDone(res.id)}>isDone</button>
                          
                      </li>
                  )
                }
           </ul>
           <br></br>
           <button onClick={toUpperCase}>ConvertUpperCase</button>
     </>
}