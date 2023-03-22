
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Card = (props) => {

  // Cuando le demos al boton mas info la ruta esta puesta como una variable.
  //si la variable detailPage coincide con X categoria, diremos entonces a la ruta que será o personas o coches o planetas e ira a la ruta que hemos puesto en el layout
  // por tanto en el layout ya hemos indicado que para planetas o lo que sea pinte una vista detallada u otra ( en  element)
 // nota: le hemos pasado en el link la categoria y la id como props--- ver componentes carrousel

 const {store,actions} = useContext(Context)

 const handleClick = () => {
  actions.addFavoritos(props.nombre) // al hacer click en el boton corazon añadirá props.nombre a favoritos ver flux.js linea 7
 }
  const detailPage =
    props.category == "people"
      ? "detailPeople"
      : props.category == "vehicles"
      ? "detailVehicles"
      : props.category == "planets"
      ? "detailPlanets"
      : null;

return (

<div id="carta" className="card mx-2" >
  <img id ="imagen-carta" src={props.imagen} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-light">{props.nombre}</h5>
    <div className="botones-carta">
    <Link to={`${detailPage}/${props.category}/${props.id}`}> 
    <button type="button" className="btn btn-outline-secondary"> Más Info!</button>
    </Link>
    <button  onClick={ handleClick} type="button" className="btn btn-outline-danger"><i className="fa-regular fa-heart" ></i></button>
    </div>
  </div>
</div>
)


				
}

//NOTA: Category e id vienen proporcionadas tmb por parametros en las rutas del Layout que luego :
//si se va a cada vista detail alli se pasan como params de la url 


export default Card;
