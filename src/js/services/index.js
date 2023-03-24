


export const getInformacion = async (informacion, uid="") =>{
    const URL= "https://www.swapi.tech/api"
    try{ 
        const response = await fetch(`${URL}/${informacion}/${uid}`.trim())
        const data = await response.json()
        return data

    } catch(error){ console.log("Error al traer informacion del servidor",error)}

}

//Cuaderno de Bitácora... este es el metodo GET para obtener info de la api de starwars
// 1º en la const URL se ha definido la url base 
// 2º en la consulta o fetch le decimos que consulte ese enlace al cual por parametros le hemos pasado esos path
// esos path corresponden a como está estructurada la  API  urlbase+ cateogria +id_elemento
// luego por parametros y por props ya especificamos en los componentes a que se refiere cada cosa