import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getInformacion } from "../services/index.js";
import "../../styles/detailPage.css";

const DetailVehicles = () => {

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
                                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="text-end">
                                        <Link to="/">
                                            <i id="close-button" title="Volver al Inicio " className="fa-regular fa-rectangle-xmark fa-2xl"></i>
                                        </Link>
                                    </div>
                                    <h5 id="card-titulo" className="card-title"> {informacion.name}</h5>
                                    <div id="card-kachau" className="card-text">
                                        <p>-- Cargo Capacity / {informacion.cargo_capacity} --</p>
                                        <p>-- Consumables / {informacion.consumables} --</p>
                                        <p>-- Model / {informacion.model} --</p>
                                        <p>-- Vehicle Class / {informacion.vehicle_class} --</p>
                                        <p>-- Passengers / {informacion.passengers} --</p>
                                        <p>-- Length  / {informacion.length} --</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

        </>
    )

}

export default DetailVehicles;