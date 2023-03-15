import React from "react";



 const InfoDetallada = (props) => {


    return (
        <>
        <Link to="/">
				<span className="btn btn-dark btn-lg" href="#" role="button">
					Volver al Inicio
				</span>
			</Link>
        <div className="card mb-3" style="max-width: 540px;">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.titulo} holaaaaaaaa</h5>
                        <p className="card-text">{props.informacion}</p>
                </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default InfoDetallada;


