import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getInformacion } from "../services/index.js";

const detailVehicles = () => {

    const [informacion, setInformacion] = useState({})
    const [loading, setLoading] = useState(false)

    const params = useParams()

    useEffect(async () => {
        setLoading(true)
        const info = await getInformacion(params.category, params.id);
        console.log(info)
        setInformacion(info.result)
        setLoading(false)
    }, [])


    return (
        <>
            <Link to="/">
                <button className="btn btn-dark btn-lg" href="#" role="button">
                    Volver al Inicio
                </button>
            </Link>
            {loading ? <div className="container"><div class="d-flex align-items-center">
                <strong> Be patient you must...</strong>
                <div class="spinner-border ms-3" role="status" aria-hidden="true"></div>
            </div> </div> :
                <div className="container">

                    <div className="card my-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"> {informacion.description}</h5>
                                    <p className="card-text"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                        qui officia deserunt mollit anim id est laborum."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

        </>
    )

}

export default InfoDetallada;