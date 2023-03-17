
import React, { useState, useEffect } from "react";
import Card from "./card.jsx";
import {getInformacion} from "../services/index.js";


const CardVehiculos = () => {

  const [listavehiculos, setListaVehiculos] = useState([])

  const getCoches = async () => {
    const kachau = await getInformacion("vehicles")
    setListaVehiculos(kachau.results)
  }
  useEffect( () => {getCoches ()}, [])

  return (
    <div className="container">

      <div className="carrousel">

        {listavehiculos.map((coche) => (<div className="cartas"> < Card key={coche.name} nombre={coche.name} imagen="https://noticias.coches.com/wp-content/uploads/2012/01/Lewis-Hamilton-Cars-2-Characters-1024x576.jpg" /></div>
        ))}


      </div>

    </div>
  )
}

export default CardVehiculos;















