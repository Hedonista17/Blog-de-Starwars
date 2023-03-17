import React, {useState} from "react";
import { Link } from "react-router-dom";
import logoWeb from "../../img/logoWeb.png";

export const Navbar = () => {

	const [favoritos, setFavoritos] = useState([])
  return (
    <nav className="navbar navbar-light mb-3">
      <Link to="/">
        <img id="logoweb" src={logoWeb}></img>
      </Link>
      <p className="my-4" id="titulo-navbar">
        Las increibles aventuras de Lucas el Jedi.
      </p>
      <div className="mx-5">
        <div class="dropdown">
          <button
            class="btn btn-dark dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           Favoritos {favoritos.length}
          </button>
          <ul class="dropdown-menu">
            <li>
              (Lista vacía)
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};
