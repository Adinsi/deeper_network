import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Profil from "./pages/Profil";




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Form />} />
          <Route path="/profil" element={<Profil />} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
