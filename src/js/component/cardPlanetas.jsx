import React, { useState, useEffect } from "react";
import { getInformacion } from "../services/index.js";
import Card from "./card.jsx";


const CardPlanetas = () => {

  const [listaplanetas, setListaPlanetas] = useState([])
  const [loading, setLoading] = useState(false)

  const getPlanets = async () => {
    setLoading(true)
    const planetas = await getInformacion("planets")
    setListaPlanetas(planetas.results)
    setLoading(false)
  }
  useEffect(() => { getPlanets() }, [])




  return (

    <>
      {loading ? <div className="d-flex align-items-center">
        <strong> Be patient you must...</strong>
        <div className="spinner-border ms-3" role="status" aria-hidden="true"></div>
      </div> :
        <div className="container">

          <div className="carrousel">

            {listaplanetas.map((planeta) =>

            (<div className="cartas">< Card category="planets" id={planeta.uid} key={planeta.name} nombre={planeta.name}
              imagen={planeta.uid == 1 ? 'https://oakthorne.net/wiki/images/Tatooine.jpg' : `https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`} /> </div>))}


          </div>


        </div>}
    </>


  )
}

export default CardPlanetas