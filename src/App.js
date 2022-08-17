import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Logout from "./component/Logout";
import PrivateRoute from "./component/PrivateRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route
          path="/login"
          element={
            <PrivateRoute>
              <Logout />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
