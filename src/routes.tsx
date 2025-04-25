import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**
 * Elements
 */
import Landing from "@/pages/landing.tsx";
import Login from "@/pages/auth/Login.tsx";
import Register from "@/pages/auth/Register.tsx";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Accounts */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
