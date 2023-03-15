import React from "react";
import "../../styles/home.css";
import CardPeople from "../component/cardPeople.jsx";
import CardPlanetas from "../component/cardPlanetas.jsx";
import CardVehiculos from "../component/ cardVehiculos.jsx";

export const Home = () => (

	<div className="container"> 
		<h1> Personajes</h1>  
        < CardPeople/>
		<h1> Planetas</h1> 
        <CardPlanetas/>
		<h1> Vehiculos</h1> 
		< CardVehiculos />

	</div>
);

//planetas de agostini xd
//coche rayo mquenn kachau
//pj x
