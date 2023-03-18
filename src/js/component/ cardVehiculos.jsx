
import React, { useState, useEffect } from "react";
import Card from "./card.jsx";
import { getInformacion } from "../services/index.js";


const CardVehiculos = () => {

  const [listavehiculos, setListaVehiculos] = useState([])
  const [loading, setLoading] = useState(false)

  const getCoches = async () => {
    setLoading(true)
    const kachau = await getInformacion("vehicles")
    setListaVehiculos(kachau.results)
    setLoading(false)
  }
  useEffect(() => { getCoches() }, [])

  return (
    <>
      {loading ? <div class="d-flex align-items-center">
        <strong> Be patient you must...</strong>
        <div class="spinner-border ms-3" role="status" aria-hidden="true"></div>
      </div> : <div className="container">

        <div className="carrousel">

          {listavehiculos.map((coche) => (<div className="cartas"> < Card category="vehicles" id={coche.uid} key={coche.name} nombre={coche.name}
            imagen={`https://starwars-visualguide.com/assets/img/vehicles/${coche.uid}.jpg`} /></div>
          ))}


        </div>

      </div>}</>


  )
}

export default CardVehiculos;















