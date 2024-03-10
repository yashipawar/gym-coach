import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Navigate if needed, but it's not used in the provided code
import AdminLogin from "./components/AdminLogin";
import Admin from "./components/Admin";
import User from "./components/User";
import UserLogin from "./components/UserLogin";
import Home from "./components/Home";
import { ExerciseProvider } from './components/ExerciseContext';

function App() {
  const handleAssignExercises = (userId, exercises) => {
    console.log(userId, exercises);
  };

  return (
    <ExerciseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/admin" element={<Admin onAssignExercises={handleAssignExercises} />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </Router>
    </ExerciseProvider>
  );
}

export default App;
