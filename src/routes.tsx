import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutesPaths } from "./utils/constants.tsx";

/**
 * Elements
 */
import Landing from "@/pages/landing.tsx";
import Login from "@/pages/auth/Login.tsx";
import Register from "@/pages/auth/Register.tsx";
import Dashboard from "./pages/dash/Dashboard.tsx";
export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Accounts */}
        <Route path={RoutesPaths.LOGIN} element={<Login />} />
        <Route path={RoutesPaths.REGISTER} element={<Register />} />
        {/* Dashboard */}
        <Route path={RoutesPaths.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
