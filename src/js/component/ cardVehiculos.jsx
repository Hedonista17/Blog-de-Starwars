
import React, {useState,useEffect}from "react";
import Card from "./card.jsx";
import GetInformacion from "../services/index.js";


const CardVehiculos =  () => {

  const [listavehiculos,setListaVehiculos] = useState([])
  useEffect(async ()=>{
    const kachau = await GetInformacion("vehicles","")
    setListaVehiculos(kachau.results)
  },[])

     return (
    <div className="container">

      <div className="carrousel">

        { listavehiculos.map((coche,key) => (<div className="cartas"> < Card key={key} nombre={coche.name} imagen= "https://noticias.coches.com/wp-content/uploads/2012/01/Lewis-Hamilton-Cars-2-Characters-1024x576.jpg"/></div>
      ))}
      
      
      </div>
     
      </div>
    )
}

export default CardVehiculos;















