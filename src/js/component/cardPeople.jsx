import React, { useState, useEffect } from "react";
import Card from "./card.jsx";
import { getInformacion } from "../services/index.js";



const CardPeople = () => {

  const [listapersonas, setListaPersonas] = useState([]) // para almacenar el listado de personas son un useSatate
  const [loading, setLoading] = useState(false)

  const getPeople = async () => {
    setLoading(true)
    const personas = await getInformacion("people")
    setListaPersonas(personas.results)
    setLoading(false)
  }

  useEffect(() => { getPeople() }, [])


 // en cada carrousel como se lo hemos pasado como PROPS le decimos que CATEOGORIA ES =  A  X I LA ID = X.UID referente a como esta montada la API 
  return (
    <>
      {loading ? <div class="d-flex align-items-center">
        <strong> Be patient you must...</strong>
        <div class="spinner-border ms-3" role="status" aria-hidden="true"></div>
      </div> :
        <div className="container">

          <div className="carrousel">
            {listapersonas.map((persona) => (
              <div className="cartas">
                <Card
                  category={"people"}
                  id={persona.uid}
                  key={persona.name}
                  nombre={persona.name}
                  imagen={`https://starwars-visualguide.com/assets/img/characters/${persona.uid}.jpg`}
                />
              </div>
            ))}

          </div>
        </div>}
    </>
  )
} // entonces la funcion lo que esta retornando es un mapeo de la lista de personas (que eso es el personas.results), yo le estoy diciendo de esta forma que recorra por cada persona solo me ponga del objeto la key name por que solo quiero el nombre, no quiero otra propiedad de momento.
// la key sera la key o tmb puedo llamarle al parametro indice o lo que sea, esta key es un identificador unico para que  REACT identifique cada elemento por un numero X.
// esto se ha pasado desde el componente  Card a través de los props ;
export default CardPeople;















