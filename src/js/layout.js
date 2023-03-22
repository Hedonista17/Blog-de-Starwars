import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home.jsx";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Alert from "./component/alert.jsx";
import DetailPeople from "./views/detailPeople.jsx";
import DetailPlanets from "./views/detailPlanets.jsx";
import DetailVehicles from "./views/detailVehicles.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/detailPeople/:category/:id" element={<DetailPeople/>} />
            <Route path="/detailVehicles/:category/:id" element={<DetailVehicles/>} />
            <Route path="/detailPlanets/:category/:id" element={<DetailPlanets/>} />
            <Route path="*" element={<Alert/>}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

// NOTA:  Respecto a las rutas se crean 3 rutas detalladas, si son personas,planetas o coches pinta en la web la vista detallada en especifico
// Para ver como está realizada la ruta acudir al componente card.jsx 