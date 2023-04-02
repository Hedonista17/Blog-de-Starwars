import "../../styles/home.css";
import React, { useState, useEffect } from "react";
import { getInformacion } from "../services/index.js";
import Card from "../component/card.jsx";
import nano from "../../img/nano-skywalker.jpg";



export const Home = () => {
	const [listapersonas, setListaPersonas] = useState([])
	const [listaplanetas, setListaPlanetas] = useState([])
	const [listavehiculos, setListaVehiculos] = useState([])
	const [loading, setLoading] = useState(false) // el spinner de carga en true para mostrarlo y en false para que se quite

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const people = await getInformacion("people", "");  // con la consulta get informacion llamo a la appi usando sus parametros category e id (services - index.js)
				setListaPersonas(people.results); //se setea al array de personas -results es como está construido la appi el objeto para acceder a el.
				const planets = await getInformacion("planets", "");
				setListaPlanetas(planets.results); //se setea al array de planetas
				const vehicles = await getInformacion("vehicles", "");
				setListaVehiculos(vehicles.results); //se setea al array de vehiculos

				setLoading(false);
			} catch (error) {
				console.log("Error al recibir la información", error);
				setLoading(false);
			}
		};
		fetchData(); //se llama a la funcion que se ha creado arriba 
	}, []);





	return (
		<>
			{loading ? <div id="loading" className="d-flex justify-content-center ">
				<div className="spinner-grow text-dark mx-3" role="status"></div>
				<strong id="title-loading"> - - - Be patient you must - - -</strong>
				<div className="spinner-grow text-dark mx-3" role="status"></div>
			</div> :
				<div className="container mt-5">
					<div className="row my-3">
						<div className="col">
						<h1 className="titulo"> PERSONAJES</h1>
							<div className="carrousel my-3">
								{listapersonas.map((persona, index) => (
									<div className="cartas">
										<Card
											category={"people"}
											id={persona.uid}
											key={index}
											nombre={persona.name}
											imagen={`https://starwars-visualguide.com/assets/img/characters/${persona.uid}.jpg`}
										/>
									</div>
								))}
								<Card nombre="El Nano Skywalker" imagen={nano} />
							</div>

						</div>
					</div>

					<div className="row my-3">
						<div className="col">
							<h1 className="titulo"> PLANETAS</h1>
							<div className="carrousel my-3">

								{listaplanetas.map((planeta, index) =>

								(<div className="cartas">< Card category="planets" id={planeta.uid} key={index} nombre={planeta.name}
									imagen={planeta.uid == 1 ? 'https://oakthorne.net/wiki/images/Tatooine.jpg' : `https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`} /> </div>))}


							</div>

						</div>
					</div>

					<div className="row my-3">
						<div className="col">
						<h1 className="titulo"> VEHICULOS</h1>
							<div id="carrousel" className="carrousel mt-3 ">

								{listavehiculos.map((coche, index) => (<div className="cartas"> < Card category="vehicles" id={coche.uid} key={index} nombre={coche.name}
									imagen={`https://starwars-visualguide.com/assets/img/vehicles/${coche.uid}.jpg`} /></div>
								))}


							</div>
						</div>
					</div>



				</div>






			}

		</>






	)

};

