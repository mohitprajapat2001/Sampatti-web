import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "@/pages/landing.tsx";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}
