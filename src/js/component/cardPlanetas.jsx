import React, {useState,useEffect} from "react";
import {getInformacion} from "../services/index.js";
import Card from "./card.jsx";


const CardPlanetas =  () => {

  const [listaplanetas, setListaPlanetas] = useState([])

  const getPlanets = async () => {
    const planetas = await getInformacion("planets")
    setListaPlanetas(planetas.results)
  }
  useEffect( () => {getPlanets()}, [])




     return (
    <div className="container">

    <div className="carrousel">
       
      { listaplanetas.map((planeta) =>
      
      (<div className="cartas">< Card key={planeta.name} nombre={planeta.name} imagen="https://ahorasomos.izertis.com/globetesting/wp-content/uploads/2018/06/maxresdefault.jpg" /> </div>))}
      
     
      </div>
   
     
  </div>
    )
}

export default CardPlanetas