import React, {useContext} from "react";
import { Link } from "react-router-dom";
import logoWeb from "../../img/logoWeb.png";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {

  const{store,actions} = useContext(Context)
  
  const handleDelete = (index) => {
    actions.deleteFavoritos(index)
  }
  return (
    <nav className="navbar mb-2">
      <Link to="/">
        <img id="logoweb" src={logoWeb}></img>
      </Link>
      <p className="my-2" id="titulo-navbar">
      May the Force be with you
      </p>
      <div className="mx-5">
      <div  className="dropdown">
          <button id="boton-navbar"
            className="btn btn-outline-dark btn-lg dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
             Favoritos
           <span id="contador" className="mx-1" >{store.favoritos.length}</span>   
          </button>
          <ul className="dropdown-menu">
           { store.favoritos.length === 0 ? <li id="msg-favoritos"> Marca tus favoritos</li> : store.favoritos.map((elemento, index) => (
              <>
             
                <li id="element-fav" key={index}>
                  {elemento}{" "}
                  <i
                    className="fa-regular fa-rectangle-xmark"
                    onClick={() => handleDelete(index)}
                  ></i>
                </li>
                
              </>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

//Lineas 33 ala 47 : es un ternario... si el numero del listado de favs es 0 (true) -- o si es (false) -- + funcion handleDelete borra por index
// el index lo coge del mapeo en la linea 34 , realiza un metodo splice por que compara dichos indices y solo borra 1, ver funcion deleteFavoritos en archivo flux.js --actions