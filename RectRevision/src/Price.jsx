export default function Price(props){
    return<>
      <div>
            <span className="price1" style={{backgroundColor:props.Color}}>{props.price}</span>
            &nbsp;&nbsp;
             <span style={{backgroundColor:props.Color}}>{props.price1}</span>
      </div>
       
    </>
}