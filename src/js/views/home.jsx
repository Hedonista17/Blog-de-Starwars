import React from "react";
import "../../styles/home.css";
import CardPeople from "../component/cardPeople.jsx";
import CardPlanetas from "../component/cardPlanetas.jsx";
import CardVehiculos from "../component/ cardVehiculos.jsx";
import {useNavigate} from "react-router-dom";


export const Home = () => (


	<div className="container"> 
	<div className="row"> 
		<h1 className="my-3"> Personajes</h1>  
        < CardPeople/>
		<h1 className="my-3"> Planetas</h1> 
        <CardPlanetas/>
		<h1 className="my-3"> Vehiculos</h1> 
		< CardVehiculos />

	</div>

	</div>
);

