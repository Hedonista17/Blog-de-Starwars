import React, {useState,useEffect} from "react";
import GetInformacion from "../services/index.js";
import Card from "./card.jsx";


const CardPlanetas =  () => {

  const [listaplanetas, setListaPlanetas] = useState([])

  useEffect( async ()=>{
    const planetas = await GetInformacion("planets","");
    setListaPlanetas(planetas.results);
  },[])

     return (
    <div className="container">

    <div className="carrousel">
       
      { listaplanetas.map((planeta,key) =>
      
      (<div className="cartas">< Card key={key} nombre={planeta.name} imagen="https://ahorasomos.izertis.com/globetesting/wp-content/uploads/2018/06/maxresdefault.jpg" /> </div>))}
      
     
      </div>
   
     
  </div>
    )
}

export default CardPlanetas