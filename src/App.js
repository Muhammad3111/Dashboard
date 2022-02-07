import React from "react";
import './scss/__global.scss';
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return(
  <div className="App">
    <Sidebar />
    <Dashboard />
  </div>
  );
}

export default App;
