// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import React from "react";
import { useRoutes } from "react-router";
import { BrowserRouter } from "react-router";
import { routes } from "./routes/routes";
import "./App.css";
import { ToastContainer } from "react-toastify";

const AppRoutes: React.FC = () => {
  const element = useRoutes(routes);
  return element;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
