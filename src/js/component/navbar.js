import React, {useContext} from "react";
import { Link } from "react-router-dom";
import logoWeb from "../../img/logoWeb.png";
import { Context } from "../store/appContext";

export const Navbar = () => {

  const{store,acctions} = useContext(Context)
  
  const handleDelete = (elemento) => {
    acctions.deleteFavoritos(elemento)
  }
  return (
    <nav className="navbar navbar-light mb-2">
      <Link to="/">
        <img id="logoweb" src={logoWeb}></img>
      </Link>
      <p className="my-3" id="titulo-navbar">
        Las increibles aventuras de Lucas el Jedi.
      </p>
      <div className="mx-5">
        <div className="dropdown">
          <button
            className="btn btn-dark dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           Favoritos {store.favoritos.length}
          </button>

          {store.favoritos.length === 0 ? (
            <ul className="dropdown-menu dropdown-menu-end">
              <li className="p-1">
                <p>Añade tus favoritos!</p>
              </li>
            </ul>
          ) : (
            <ul className="dropdown-menu dropdown-menu-end p-3">
              {store.favoritos.map((elemento, index) => (
                <li  key={index}>
                  <a> {elemento }</a>
                   <i onClick={() => handleDelete(elemento)} className="fa-solid fa-xmark mx-2" ></i>
                  
                </li> 
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
