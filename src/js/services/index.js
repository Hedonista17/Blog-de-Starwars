

const URL= "https://www.swapi.tech/api"

export  const GetInformacion = async (informacion, uid) =>{

    try{ 
        const response = await fetch(`${URL}/${informacion}/${uid}`.trim())
        const data = await response.json()
        return data

    } catch(error){ console.log("error al traer informacion del servidor",error)}

}