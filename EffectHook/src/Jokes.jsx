import {useEffect, useState} from "react";
function Jokes(){
    let[jokes,setJokes]=useState({});
    const url="https://official-joke-api.appspot.com/random_joke";

   let getJokes=async()=>{
       let response =await fetch(url);
        let jsonresponse=await response.json();
        console.log(jsonresponse);
        setJokes({setup:jsonresponse.setup,punchline:jsonresponse.punchline});
   }
   useEffect(()=>
    {
      async function getdata()
      {
       let response =await fetch(url);
        let jsonresponse=await response.json();
        console.log(jsonresponse);
        setJokes({setup:jsonresponse.setup,punchline:jsonresponse.punchline});
      }
      getdata();
    },[]);
   return<>
      <h3>Joke!</h3>
      <h4>{jokes.setup}</h4>
      <h4>{jokes.punchline}</h4>
     <button onClick={getJokes}>GetJokes</button>
   </>
}
export default Jokes;