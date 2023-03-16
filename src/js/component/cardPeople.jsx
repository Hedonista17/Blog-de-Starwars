import React, { useState, useEffect } from "react";
import Card from "./card.jsx";
import GetInformacion from "/workspace/Blog-de-Starwars/src/js/services/index.js";

const CardPeople =  () => {

  const [listapersonas, setListaPersonas] = useState([])

  useEffect( async ()=>{
    const personas = await GetInformacion("people", "");
    setListaPersonas(personas.results);
    console.log(personas.results)
  },[])

     return (
    <div className="container">

      <div className="carrousel">
      {listapersonas.map((persona, key) => (
          <div className="cartas">
          <Card
            key={key}
            nombre={persona.name}
            imagen="https://media.revistagq.com/photos/5fc4d3e608c92a6bb64b9b83/master/pass/baby-yoda-nombre.jpg"
          />
          </div>
        ))}
     
      </div>
    </div>
    )
}

export default CardPeople;















