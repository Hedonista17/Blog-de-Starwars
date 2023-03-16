import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";
import GetInformacion from "../services";

 const InfoDetallada = () => {

    const [informacion, setInformacion] = useState({})

    const params = useParams()

    useEffect( async ()=>{
        //setloading//
        const info = await GetInformacion(params.category,params.id); 
        console.log(info)
         setInformacion(info.result)
      },[])


    return (
        <>
        <Link to="/">
				<span className="btn btn-dark btn-lg" href="#" role="button">
					Volver al Inicio
				</span>
			</Link>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> {informacion.description}</h5>
                        <p className="card-text"></p>
                </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default InfoDetallada;


