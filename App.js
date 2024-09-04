import React from "react";
import Signin from "./components/Signin/SignIn.jsx";
import Rightpanel from "./components/Rightpanel/RightPanel.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="loginBody">
      <Signin />
      <Rightpanel />
    </div>
  );
};

export default App;
