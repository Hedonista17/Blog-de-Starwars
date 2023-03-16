import React from "react"


export const GetInformacion = async (informacion, uid) =>{
    const URL= "https://www.swapi.tech/api"
    try{ 
        const response = await fetch(`${URL}/${informacion}/${uid}`.trim())
        const data = await response.json()
        return data

    } catch(error){ console.log("Error al traer informacion del servidor",error)}

}

export default GetInformacion;