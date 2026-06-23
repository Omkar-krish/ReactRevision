import Heading from "./Heading";
import PrdInfo from "./PrdInfo"
import Price from "./Price";
import "./Card.css"

 export default function Card(){
    let price1=[500,600,700,800]
    let price=[100,200,300,400,500];
    return<>
      <div className="cards">
           <span className="brd">
                 <Heading name="Logitech Metch Master"/>
                 <PrdInfo para1="8000DPI" para2="5 Programmable Button"/>
                 <Price price1={price1[0]} price={price[0]} Color="pink"/>
           </span>

           <span className="brd">
                 <Heading name="Logitech Metch Master"/>
                 <PrdInfo para1="8000DPI" para2="5 Programmable Button"/>
                 <Price price1={price[1]}price={price[1]} Color="pink"/>
           </span>

            <span className="brd">
                 <Heading name="Logitech Metch Master"/>
                 <PrdInfo para1="8000DPI" para2="5 Programmable Button"/>
                 <Price price1={price1[2]} price={price[2]} Color="pink"/>
           </span>
      </div>
    </>
}