import React  from "react";

import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import { BrowserRouter as Router } from "react-router-dom";

import Products from "./Components/Productes/Products";
import Home from "./Pages/Home";

// import CreateContext from "./Components/Context/CreateContext";
// import Producthelper from "./Components/Productes/Producthelper";
// import Producthelper from "./Components/Productes/Producthelper";


function App() {
  
  return (
    <div>
      

    

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products num={2 + 10} />} />
          </Routes>
        </Router>
          
    
      
    </div>
  );
}

export default App;
