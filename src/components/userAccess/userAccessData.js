export const userAccessStats = [
  {
    label: "TOTAL SYSTEM USERS",
    value: "1,348",
    icon: "users",
    detail: "86 Staff & Faculty",
    secondary: "1,262 Portals",
    trend: "+14 new user",
    trendText: "profiles this month",
  },
  {
    label: "CONFIGURED ROLES",
    value: "12 Active",
    icon: "roles",
    detail: "5 System Locked",
    secondary: "7 Institutional",
    trend: "Zero",
    trendText: "unbound permissions",
  },
  {
    label: "ACTIVE SESSIONS",
    value: "342 Online",
    icon: "sessions",
    detail: "Biometric SSO & Web",
    secondary: "Active authentication",
    trend: "0",
    trendText: "suspicious logins detected",
  },
  {
    label: "SCOPE VIOLATIONS",
    value: "0 Today",
    icon: "shield",
    detail: "Cross-cohort access blocked",
    secondary: "",
    trend: "99.98%",
    trendText: "policy accuracy",
  },
];

export const users = [
  {
    id: "U001",
    initials: "RM",
    name: "Dr. Rajeshwari Menon",
    email: "r.menon@brightfield.edu",
    uid: "EMP-8821",
    role: "Teaching Faculty",
    role2: "HoD Science",
    scope: "Grades 11–12 & Science Dept",
    type: "Staff",
    status: "Active",
  },
  {
    id: "U002",
    initials: "SD",
    name: "Sunita Deshmukh",
    email: "s.deshmukh@brightfield.edu",
    uid: "EMP-1044",
    role: "Chief Registrar",
    role2: "Admissions Lead",
    scope: "Institutional (All Students)",
    type: "Staff",
    status: "Active",
  },
  {
    id: "U003",
    initials: "RK",
    name: "Ramesh Khurana",
    email: "r.khurana@brightfield.edu",
    uid: "EMP-4309",
    role: "Operations",
    role2: "Fleet Lead",
    scope: "Logistics & Fleet Routes",
    type: "Staff",
    status: "Active",
  },
  {
    id: "U004",
    initials: "EV",
    name: "Elena Vance",
    email: "e.vance@brightfield.edu",
    uid: "EMP-6019",
    role: "Homeroom Lead",
    role2: "Grade 6",
    scope: "Grade 6-A, Middle Wing",
    type: "Staff",
    status: "Active",
  },
  {
    id: "U005",
    initials: "RK",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@outlook.com",
    uid: "GUARD-G-4410",
    role: "Parent / Guardian",
    role2: "",
    scope: "Student #ST1024 Only",
    type: "Portal",
    status: "Active",
  },
];

export const roleTemplates = [
  {
    name: "Super Administrator",
    description: "Full Campus Scope • 84 Permissions",
    icon: "shield",
    locked: true,
  },
  {
    name: "School Principal / Director",
    description: "Executive Sign-off • 76 Permissions",
    icon: "school",
    locked: true,
  },
  {
    name: "Bursar & Finance Officer",
    description: "Logistics & Dues • 42 Permissions",
    icon: "finance",
    locked: true,
  },
  {
    name: "Teaching Faculty & Homeroom",
    description: "Roster & Marks Entry • 28 Permissions",
    icon: "teacher",
    locked: true,
  },
  {
    name: "Parent / Guardian Portal",
    description: "Student SSO & Fee Pay • 12 Permissions",
    icon: "parent",
    locked: true,
  },
];

export const organizationalScopes = [
  {
    name: "Campus-Wide Global Scope",
    description:
      "Applies across all branches, grades, and central institutional administrative departments.",
  },
  {
    name: "Wing / Division Scope",
    description:
      "Partitioned strictly by Primary (Gr 1–5), Middle (Gr 6–8), or Senior Secondary (Gr 9–12).",
  },
  {
    name: "Departmental Scope",
    description:
      "Access restricted to assigned academic or administrative departments.",
  },
  {
    name: "Cohort / Section Scope",
    description:
      "Access limited to specific grade, class, section, or assigned homeroom.",
  },
];

export const permissions = [
  {
    module: "Students / SIS",
    view: true,
    create: true,
    edit: true,
    delete: false,
    export: true,
  },
  {
    module: "Employees / EIS",
    view: true,
    create: false,
    edit: false,
    delete: false,
    export: false,
  },
  {
    module: "Attendance",
    view: true,
    create: true,
    edit: true,
    delete: false,
    export: true,
  },
  {
    module: "Academics",
    view: true,
    create: true,
    edit: true,
    delete: false,
    export: true,
  },
  {
    module: "Examinations",
    view: true,
    create: true,
    edit: true,
    delete: false,
    export: true,
  },
  {
    module: "Finance & Fees",
    view: true,
    create: false,
    edit: false,
    delete: false,
    export: true,
  },
  {
    module: "Communication",
    view: true,
    create: true,
    edit: true,
    delete: false,
    export: true,
  },
  {
    module: "Reports",
    view: true,
    create: false,
    edit: false,
    delete: false,
    export: true,
  },
];
