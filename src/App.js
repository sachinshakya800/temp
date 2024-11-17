import React, { useEffect } from "react";
import Auth from "./components/auth";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Actions/User";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth/:type" element={<Auth />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
