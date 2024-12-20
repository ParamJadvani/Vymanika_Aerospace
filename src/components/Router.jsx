import React from "react";
import { Route, Routes } from "react-router-dom";

// Import all page components
import Home from "../pages/Home";
import AboutUS from "../pages/AboutUS";
import Services from "../pages/Services";
import ContactUS from "../pages/ContactUS";
import Training from "../pages/Training";
import Blog from "../pages/Blog";

const Router = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <AboutUS /> },
    { path: "/services", element: <Services /> },
    { path: "/contact", element: <ContactUS /> },
    { path: "/training", element: <Training /> },
    { path: "/blog", element: <Blog /> },
    {
      path: "*",
      element: (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h2>404 Page NOT Found</h2>
        </div>
      ),
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Router;
