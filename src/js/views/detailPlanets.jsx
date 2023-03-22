import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getInformacion } from "../services/index.js";

const DetailPlanets= () => {

    const [informacion, setInformacion] = useState({})
    const [loading, setLoading] = useState(false)

    const params = useParams()

    useEffect(async () => {
        setLoading(true)
        const info = await getInformacion(params.category, params.id);
        setInformacion(info.result.properties)
        setLoading(false)
    }, [])


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
                                <img src={ params.id === "1" ? 'https://oakthorne.net/wiki/images/Tatooine.jpg' : `https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
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

                               <p> Climate : {informacion.climate}</p>
                               <p> Diameter: {informacion.diameter}</p>
                               <p> Gravity: {informacion.gravity}</p>
                               <p>Orbital Period: {informacion.orbital_period}</p>
                               <p>Population : {informacion.population}  people</p>
                               <p> Rotation Period: {informacion.rotation_period}</p>
                               <p>Surface Water: {informacion.surface_water}</p>
                               <p> Terrain: {informacion.terrain}</p>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

        </>
    )

}

export default DetailPlanets;