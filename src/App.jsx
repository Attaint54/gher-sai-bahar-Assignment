import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  // load user once
  useEffect(() => {
    const stored = localStorage.getItem("currentUser");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  // login function
  const loginUser = (data) => {
    localStorage.setItem("currentUser", JSON.stringify(data));
    setUser(data);
  };

  // logout function
  const logoutUser = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? <Navigate to="/dashboard" /> : <Login loginUser={loginUser} />
        }
      />

      <Route
        path="/signup"
        element={user ? <Navigate to="/dashboard" /> : <Signup />}
      />

      <Route
        path="/dashboard"
        element={
          user ? (
            <Dashboard user={user} logoutUser={logoutUser} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
}

export default App;