import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  PageLogin,
  PageMain,
  PageProfile,
  PageNoMatch,
} from "./pages";
import { NavBar } from "./components/NavBar";
import { useTypedSelector } from "./hooks/useTypedselector";
import "./App.css";

function App() {
  const isLogined = useTypedSelector((state) => state.user.isLogined);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          index
          element={isLogined ? <PageMain /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={isLogined ? <Navigate to="/profile" /> : <PageLogin />}
        />
        <Route
          path="/profile"
          element={isLogined ? <PageProfile /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<PageNoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
