import {
  LayoutDashboard,
  Users,
  UserCog,
  ClipboardCheck,
  BookOpen,
  GraduationCap,
  Wallet,
  MessageSquare,
  ShieldCheck,
  FileText,
  CalendarDays,
} from "lucide-react";

export const navigation = {
  // ==========================================
  // SUPER ADMIN
  // ==========================================

  SUPER_ADMIN: [
    {
      label: "Dashboard",
      path: "/super-admin/dashboard",
      icon: LayoutDashboard,
    },

    {
      label: "Schools",
      path: "/super-admin/schools",
      icon: BookOpen,
    },
  ],

  // ==========================================
  // SCHOOL ADMIN
  // ==========================================

  SCHOOL_ADMIN: [
    {
      label: "Dashboard",
      path: "/school-admin/dashboard",
      icon: LayoutDashboard,
    },

    {
      label: "Students",
      path: "/school-admin/students",
      icon: Users,
    },

    {
      label: "Employees",
      path: "/school-admin/employees",
      icon: UserCog,
    },

    {
      label: "Attendance",
      path: "/school-admin/attendance",
      icon: ClipboardCheck,
    },

    {
      label: "Academics",
      path: "/school-admin/academics",
      icon: BookOpen,
    },


    {
      label: "Finance & Fees",
      path: "/school-admin/finance",
      icon: Wallet,
    },

    {
      label: "Communication",
      path: "/school-admin/communication",
      icon: MessageSquare,
    },

    {
      label: "Users & Access",
      path: "/school-admin/userAccess",
      icon: ShieldCheck,
    },

    {
      label: "Reports",
      path: "/school-admin/reports",
      icon: FileText,
    },
  ],

  // ==========================================
  // TEACHER
  // ==========================================

  TEACHER: [
    {
      label: "Home",
      path: "/teacher/dashboard",
      icon: LayoutDashboard,
    },

    {
      label: "Students",
      path: "/teacher/students",
      icon: Users,
    },

    {
      label: "Attendance",
      path: "/teacher/attendance",
      icon: ClipboardCheck,
    },

    {
      label: "Marks",
      path: "/teacher/marks",
      icon: FileText,
    },

    {
      label: "Exams",
      path: "/teacher/exams",
      icon: GraduationCap,
    },

    {
      label: "Syllabus",
      path: "/teacher/syllabus",
      icon: BookOpen,
    },

    {
      label: "Timetable",
      path: "/teacher/timetable",
      icon: CalendarDays,
    },
  ],
};
