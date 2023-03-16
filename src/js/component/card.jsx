
import React from "react";
import { Link } from "react-router-dom";



const Card = (props) => {

return (

<div id="carta" className="card mx-2" >
  <img id ="imagen-carta" src={props.imagen} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-light">{props.nombre}</h5>
    <div className="botones-carta">
    <Link to="/informacion-detallada">
    <button type="button" className="btn btn-outline-secondary"> Más Info!</button>
    </Link>
    <button type="button" className="btn btn-outline-danger"><i className="fa-regular fa-heart"></i></button>
    </div>
  </div>
</div>
)


				
}



export default Card;