import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Logout from "./component/Logout";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Logout />} path="/login" />
      </Routes>
    </>
  );
};

export default App;
