function Healper(n){
   let arr=new Array(n);
    for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*10)
    }
    return arr;
}
function arrsum(arr){
   return arr.reduce((sum,csum)=>sum+csum,0);
}
function winninhSu(ticket){
   return ticket.every((ele)=>{ticket[0]===ele})

}
export {Healper,arrsum,winninhSu};