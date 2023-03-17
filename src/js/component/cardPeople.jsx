import React, { useState, useEffect } from "react";

import Card from "./card.jsx";
import {getInformacion} from "../services/index.js";

//**ESTOS APUNTES APLICAN PARA EL RESTO DE CARROUSEL PLANETAS Y COCHES */

const CardPeople =  () => {

  const [listapersonas, setListaPersonas] = useState([]) // para almacenar el listado de personas son un useSatate

  const getPeople = async () => {
    const personas = await getInformacion("people")
    setListaPersonas(personas.results)
  }
  useEffect( () => {getPeople()}, [])


  
     return (
    <div className="container"> 

      <div className="carrousel">
      {listapersonas.map((persona) => (
          <div className="cartas">
          <Card
            category={"people"}
            id={persona.uid}
            key={persona.name}
            nombre={persona.name}
            imagen="https://media.revistagq.com/photos/5fc4d3e608c92a6bb64b9b83/master/pass/baby-yoda-nombre.jpg"
          />
          </div>
        ))}
     
      </div>
    </div>
    )
} // entonces la funcion lo que esta retornando es un mapeo de la lista de personas (que eso es el personas.results), yo le estoy diciendo de esta forma que recorra por cada persona solo me ponga del objeto la key name por que solo quiero el nombre, no quiero otra propiedad de momento.
 // la key sera la key o tmb puedo llamarle al parametro indice o lo que sea, esta key es un identificador unico para que  REACT identifique cada elemento por un numero X.
 // esto se ha pasado desde el componente  Card a través de los props ;
export default CardPeople;















