import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import CreateContext from "./Components/Context/CreateContext";
// import  Producthelper  from "./Components/Productes/Producthelper";
// import Producthelper from "./Components/Productes/Producthelper";
export const AllDataContext = React.createContext();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AllDataContext.Provider value={"iam from Index.js"}>
    <CreateContext>
      <App />
    </CreateContext>
  </AllDataContext.Provider>
);
