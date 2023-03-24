import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import routes from "routes.js";

import AdminLayout from "layouts/Admin.js";
import TestView from "views/Dashboard.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const getRoutes = (routes) => {
  return routes.map((prop, key) => {
    if (prop.layout === "/admin") {
      return (
        <Route
          path={prop.layout + prop.path}
          element={<prop.component />}
          key={key}
        />
      );
    } else {
      return null;
    }
  });
};

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route>{getRoutes(routes)}</Route>
      </Route>
      <Route path="/" element={<Navigate replace to="/admin" />} />
    </Routes>
  </BrowserRouter>
);
