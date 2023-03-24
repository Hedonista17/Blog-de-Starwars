import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getInformacion } from "../services/index.js";
import "../../styles/detailPage.css";

const DetailPlanets = () => {

    const [informacion, setInformacion] = useState({})
    const [loading, setLoading] = useState(false)

    const params = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const info = await getInformacion(params.category, params.id);  // estos argumentos que se la pasan al metodo  GET de la api son los ya definidos en services
                //console.log(info)
                setInformacion(info.result.properties); //lo que queremos pintar realmente son sus caracteristicas accedemos entonces dentro del objeto así.
                // console.log("esto es la info detallada", info.result.properties)
                setLoading(false);

            } catch (error) {
                console.log("Error al consultar la informacion", error);
                setLoading(false);

            }
        };
        fetchData();
    }, [params.category, params.id]);  // los parametros son los que hemos indicado en la ruta del layout 



    return (
        <>

            {loading ? <div id="loading" className="d-flex justify-content-center ">
                <div className="spinner-grow text-dark mx-3" role="status"></div>
                <strong id="title-loading"> - - - Be patient you must - - -</strong>
                <div className="spinner-grow text-dark mx-3" role="status"></div>
            </div> :
                <div className="container">

                    <div id="vista-detallada" className="card my-5">
                        <div className="row p-2 g-0">
                            <div className="col-md-4">
                                <img src={params.id === "1" ? 'https://oakthorne.net/wiki/images/Tatooine.jpg' : `https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="text-end">
                                        <Link to="/">
                                            <i id="close-button" title="Volver al Inicio " className="fa-regular fa-rectangle-xmark fa-2xl"></i>
                                        </Link>
                                    </div>
                                    <h5 id="card-titulo" className="card-title"> {informacion.name}</h5>
                                    <div id="card-planets" className="card-text">

                                        <p>-- Climate / {informacion.climate} --</p>
                                        <p>-- Diameter / {informacion.diameter} --</p>
                                        <p>-- Gravity / {informacion.gravity} --</p>
                                        <p>-- Orbital Period / {informacion.orbital_period} --</p>
                                        <p>-- Population / {informacion.population}  people --</p>
                                        <p>-- Rotation Period / {informacion.rotation_period} --</p>
                                        <p>-- Surface Water / {informacion.surface_water} --</p>
                                        <p>-- Terrain / {informacion.terrain} --</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

        </>
    )

}

export default DetailPlanets;