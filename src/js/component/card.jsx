
import React from "react";



const Card = (props) => {

return (

<div className="card mx-2" >
  <img id ="imagen-carta" src={props.imagen} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.dato1}</h5>
    <p>ndjfvngqngqgnq</p>
    <div className="botones-carta">
    <button type="button" class="btn btn-outline-primary"> Más Info!</button>
    <button type="button" class="btn btn-outline-warning"><i class="fa-regular fa-heart"></i></button>
    </div>
  </div>
</div>
)


}



export default Card;

// /* <p className="card-text">{props.dato2}</p>
//     <p>{props.dato3}</p>
//     <p>{props.dato4}</p> */
//style="width: 18rem;"