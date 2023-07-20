import React from "react";
import { DashboardRoutes } from "./routers/DashboardRoutes";
// @ts-ignore
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <Router>
        <DashboardRoutes />
      </Router>
  );
}

export default App;
