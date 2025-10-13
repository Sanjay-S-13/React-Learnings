import { useState , useEffect } from "react";

function Course(props){

    const [purchased , setPurchased ] = useState(false);

    function BuyCourse(discount){
        console.log("purchased with "+discount+"% discount");
        //console.log(purchased)    prints false
        setPurchased(true);
        //console.log(purchased);   even here, prints only false bcos setmethod is a async
    }

    const [applyDis , setApplyDis ] = useState(props.price);

    function applyDiscount(){
        setApplyDis(props.price*0.9);
    }

      return( props.name && 
        <div className="card">
            <img src= {props.img}/>
            <h3>{props.name}</h3>
            <p>{applyDis.toFixed(2)}</p>
            <button onClick={()=>applyDiscount()} id = "buy-button">Click here for Discount</button>
            <button onClick = {()=>BuyCourse(10)}  id = "buy-button">buy</button>
            <button onClick={()=>props.deletes(props.id)} id="buy-button">delete</button>
            <p className={`purchase-msg ${purchased ? "done" : "pending"}`}>
                {purchased ? "Already purchased" : "Get it now"}
            </p>
        </div>
    );  
}

// Course.defaultProps = {
//     img: "https://via.placeholder.com/250",
//     name: "A Good Web Dev",
//     price: "Free for all"
// } 

export default Course;