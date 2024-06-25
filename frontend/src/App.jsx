import React from "react";
import { Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Course from "./components/courses/Course";
import Signup from "./components/Signup";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser,setAuthUser]=useAuth()
  
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={authUser? <Course /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
