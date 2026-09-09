import { Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";

import AuthLayout from "./layouts/AuthLayout";
//import SuperAdminLayout from "./layouts/SuperAdminLayout";
import SchoolAdminLayout from "./layouts/SchoolAdminLayout";
//import TeacherLayout from "./layouts/TeacherLayout";

import Login from "./pages/auth/Login";
import Placeholder from "./pages/common/Placeholder";

import Dashboard from "./pages/schoolAdmin/Dashboard";
import Students from "./pages/schoolAdmin/Students";
import Employees from "./pages/schoolAdmin/Employees";
import Attendance from "./pages/schoolAdmin/Attendance";
import Academics from "./pages/schoolAdmin/Academics";
import FinanceFees from "./pages/schoolAdmin/FinanceFees";
import Communication from "./pages/schoolAdmin/Communication";
import UserAccess from "./pages/schoolAdmin/UserAccess";
import Reports from "./pages/schoolAdmin/Reports";

import { useAuth } from "./hooks/useAuth";

export default function App() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* =========================
          AUTH
      ========================== */}

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* =========================
          SUPER ADMIN
      ========================== */}

      {/* <Route element={<ProtectedRoute allowedRoles={["SUPER_ADMIN"]} />}>
        <Route path="/super-admin" element={<SuperAdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />

          <Route
            path="dashboard"
            element={<Placeholder title="Super Admin Dashboard" />}
          />

          <Route path="schools" element={<Placeholder title="Schools" />} />
        </Route>
      </Route>*/}

      <Route element={<ProtectedRoute allowedRoles={["SCHOOL_ADMIN"]} />}>
        <Route path="/school-admin" element={<SchoolAdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="employees" element={<Employees />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="academics" element={<Academics />} />
          <Route path="finance" element={<FinanceFees />} />
          <Route path="communication" element={<Communication />} />
          <Route path="userAccess" element={<UserAccess />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Route>

      {/* =========================
          TEACHER
      ========================== */}

      {/*<Route element={<ProtectedRoute allowedRoles={["TEACHER"]} />}>
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />

          <Route
            path="dashboard"
            element={<Placeholder title="Teacher Dashboard" />}
          />

          <Route path="students" element={<Placeholder title="Students" />} />

          <Route
            path="attendance"
            element={<Placeholder title="Attendance" />}
          />

          <Route path="marks" element={<Placeholder title="Marks" />} />

          <Route path="exams" element={<Placeholder title="Exams" />} />

          <Route path="syllabus" element={<Placeholder title="Syllabus" />} />

          <Route path="timetable" element={<Placeholder title="Timetable" />} />
        </Route>
      </Route>*/}

      {/* =========================
          DEFAULT
      ========================== */}

      <Route
        path="*"
        element={
          <Navigate
            to={
              user
                ? user.role === "SUPER_ADMIN"
                  ? "/super-admin/dashboard"
                  : user.role === "SCHOOL_ADMIN"
                    ? "/school-admin/dashboard"
                    : "/teacher/dashboard"
                : "/login"
            }
            replace
          />
        }
      />
    </Routes>
  );
}
