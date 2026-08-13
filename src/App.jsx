import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import DashboardLayout from "./components/layout/DashboardLayout.jsx";

// Authentication
import Login from "./pages/auth/Login.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";

// Main Pages
import Dashboard from "./pages/Dashboard.jsx";

import Patients from "./pages/Patients.jsx";
import AddPatient from "./pages/AddPatient.jsx";
import PatientDetails from "./pages/PatientDetails.jsx";

import Doctors from "./pages/Doctors.jsx";
import AddDoctor from "./pages/AddDoctor.jsx";
import DoctorDetails from "./pages/DoctorDetails.jsx";

import Appointments from "./pages/Appointments.jsx";
import Beds from "./pages/Beds.jsx";
import Pharmacy from "./pages/Pharmacy.jsx";
import Billing from "./pages/Billing.jsx";
import Notifications from "./pages/Notifications.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";

import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route path="/login" element={<Login />} />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
        path="/reset-password"
        element={<ResetPassword />}
      />

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/patients"
            element={<Patients />}
          />

          <Route
            path="/patients/add"
            element={<AddPatient />}
          />

          <Route
            path="/patients/:id"
            element={<PatientDetails />}
          />

          <Route
            path="/doctors"
            element={<Doctors />}
          />

          <Route
            path="/doctors/add"
            element={<AddDoctor />}
          />

          <Route
            path="/doctors/:id"
            element={<DoctorDetails />}
          />

          <Route
            path="/appointments"
            element={<Appointments />}
          />

          <Route
            path="/beds"
            element={<Beds />}
          />

          <Route
            path="/pharmacy"
            element={<Pharmacy />}
          />

          <Route
            path="/billing"
            element={<Billing />}
          />

          <Route
            path="/notifications"
            element={<Notifications />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
