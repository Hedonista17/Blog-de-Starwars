import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getInformacion } from "../services/index.js";

const DetailPeople = () => {

    const [informacion, setInformacion] = useState({}) //Por tanto, para imprimir las caracteristicas en la vista ,setInformacion sera nuestras properties y a partir de ahi accedemos a lo que queramos
    const [loading, setLoading] = useState(false)

    const params = useParams()

    useEffect(async () => {
        setLoading(true)
        const info = await getInformacion(params.category, params.id); // estos argumentos que se la pasan al metodo  GET de la api son los ya definidos en services
        console.log(info)
        setInformacion(info.result.properties) //lo que queremos pintar realmente son sus caracteristicas accedemos entonces dentro del objeto así.
        // console.log("esto es la info detallada", info.result.properties)
        setLoading(false)
    }, [params.category, params.id]) // los parametros son los que hemos indicado en la ruta del layout 




    return (
        <>

            {loading ? <div className="container"><div class="d-flex align-items-center">
                <strong> Be patient you must...</strong>
                <div class="spinner-border ms-3" role="status" aria-hidden="true"></div>
            </div> </div> :
                <div className="container">

                    <div className="card my-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="text-end">
                                        <Link to="/">
                                            <i title="Volver al Inicio " className="fa-regular fa-rectangle-xmark fa-2xl"></i>
                                        </Link>
                                    </div>
                                    <h5 className="card-title"> {informacion.name}</h5>
                                    <p className="card-text">
                                        <p>Birth Year : {informacion.birth_year}</p>
                                        <p>Eye Color:{informacion.eye_color}</p>
                                        <p> Skin Color :{informacion.skin_color}</p>
                                        <p> Hair Color :{informacion.hair_color}</p>
                                        <p>Gender :{informacion.gender}</p>
                                        <p>Height:{informacion.height} cm</p>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

        </>
    )

}

export default DetailPeople;