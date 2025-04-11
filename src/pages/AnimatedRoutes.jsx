import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Register from "./Register";
import Home from "./Home";
import Analysis from "./Analysis";
import Reports from "./Reports";
import Dashboard from "./Dashboard";
import DeveloperDashboard from "./DeveloperDashboard";
import DeveloperAdd from "./DeveloperAdd";
import DeveloperModify from "./DeveloperModify";
import DeveloperDelete from "./DeveloperDelete";
import Login from "./Login";
import DeveloperLogin from "./DeveloperLogin";
import Classification from "./Classification";
import Clustering from "./Clustering";
import Association from "./Association";
import Outliers from "./Outliers";

function AnimatedRoutes({ isUserLoggedIn, isDeveloperLoggedIn, setIsUserLoggedIn, setIsDeveloperLoggedIn }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500); // Slightly faster transition
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Routes location={location} key={location.pathname}>
            {/* ✅ Public Routes */}
            <Route
              path="/"
              element={
                <Login
                  setIsUserLoggedIn={setIsUserLoggedIn}
                  setIsDeveloperLoggedIn={setIsDeveloperLoggedIn}
                />
              }
            />
            <Route path="/register" element={<Register />} />

            {/* ✅ Protected User Routes */}
            {isUserLoggedIn ? (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/analysis" element={<Analysis />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/classification" element={<Classification />} />
                <Route path="/clustering" element={<Clustering />} />
                <Route path="/association" element={<Association />} />
                <Route path="/outliers" element={<Outliers />} />
              </>
            ) : (
              <>
                {/* 🔥 Redirect protected user routes to login */}
                <Route path="/dashboard" element={<Navigate to="/" replace />} />
                <Route path="/analysis" element={<Navigate to="/" replace />} />
                <Route path="/reports" element={<Navigate to="/" replace />} />
                <Route path="/classification" element={<Navigate to="/" replace />} />
                <Route path="/clustering" element={<Navigate to="/" replace />} />
                <Route path="/association" element={<Navigate to="/" replace />} />
                <Route path="/outliers" element={<Navigate to="/" replace />} />
              </>
            )}

            {/* ✅ Protected Developer Routes */}
            {isDeveloperLoggedIn ? (
              <>
                <Route path="/developer-dashboard" element={<DeveloperDashboard />} />
                <Route path="/developer-add" element={<DeveloperAdd />} />
                <Route path="/developer-modify" element={<DeveloperModify />} />
                <Route path="/developer-delete" element={<DeveloperDelete />} />
              </>
            ) : (
              <>
                {/* 🔥 Redirect protected developer routes to login */}
                <Route path="/developer-dashboard" element={<Navigate to="/" replace />} />
                <Route path="/developer-add" element={<Navigate to="/" replace />} />
                <Route path="/developer-modify" element={<Navigate to="/" replace />} />
                <Route path="/developer-delete" element={<Navigate to="/" replace />} />
              </>
            )}

            {/* ✅ Redirect All Unknown Paths to Login */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
