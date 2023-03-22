import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home.jsx";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Alert from "./component/alert.jsx";
import detailPeople from "./views/detailPeople.jsx";

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
            <Route path="/detailPeople/:category/:id" element={<detailPeople/>} />
            <Route path="/detailVehicles/:category/:id" element={<detailVehicles/>} />
            <Route path="/detailPlanets/:category/:id" element={<detailPlanets/>} />
            <Route path="*" element={<Alert/>}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
