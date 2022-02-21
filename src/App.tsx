import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/Home";
import { SignIn } from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
