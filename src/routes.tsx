import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutesPaths } from "./utils/constants.tsx";
import { useUtilsContext } from "./providers/utils-providers.tsx";

/**
 * Elements
 */
import Landing from "@/pages/landing.tsx";
import Login from "@/pages/auth/Login.tsx";
import Register from "@/pages/auth/Register.tsx";
import Dashboard from "./pages/dash/Dashboard.tsx";
import Preloader from "./components/ui/preloader.tsx";
export function AppRoutes() {
  const { preloader } = useUtilsContext();
  return (
    <Router>
      {preloader && <Preloader />}
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
