import React from "react";
import { Route, Routes } from "react-router-dom";

// Import all page components
import Home from "/src/pages/Home";
import AboutUS from "/src/pages/AboutUS";
import Services from "/src/pages/Services";
import ContactUS from "/src/pages/ContactUS";
import Training from "/src/pages/Training";
import Blog from "/src/pages/Blog";

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
