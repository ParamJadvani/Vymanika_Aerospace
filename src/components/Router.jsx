import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Import all page components
import Home from "/src/pages/Home";
import AboutUS from "/src/pages/AboutUS";
import Services from "/src/pages/Services";
import ContactUS from "/src/pages/ContactUS";
import Training from "/src/pages/Training";
import Blog from "/src/pages/Blog";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Router = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/aboutus", element: <AboutUS /> },
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
    <>
      <ScrollToTop />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

export default Router;
