
import React from "react";



const Card = (props) => {

return (

<div className="card" >
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.dato1}</h5>
    
    <a href="#" className="btn btn-primary">Mas Info!</a>
    <button type="button" class="btn btn-outline-warning"><i class="fa-regular fa-heart"></i></button>
  </div>
</div>
)


}



export default Card;

// /* <p className="card-text">{props.dato2}</p>
//     <p>{props.dato3}</p>
//     <p>{props.dato4}</p> */
//style="width: 18rem;"