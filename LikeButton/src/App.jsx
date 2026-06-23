import{useState} from "react"
export default function App(){
    let [isLiked,setisLiked]=useState(false);
    let [count,setCount]=useState(0)


   let style={
      fontSize:"60px",
      color:"red"
      
   }
   let changeColor=()=>{
        setisLiked(!isLiked);
        setCount(count+1);
      console.log("button is Clicked");
   }

    return<>
      <h1>Like Button</h1>
      
       <p className="btn" onClick={changeColor}>
          {
          isLiked?<i class="fa-solid fa-heart" style={style}></i>:<i class="fa-regular fa-heart" style={style}></i>
        }
       </p>
        <h1>Count{count}</h1>
    </>
};