export const communicationStats = [
  {
    label: "TOTAL DISPATCHED",
    period: "SEPT",
    value: "48,290",
    change: "+12.4%",
    description: "vs last month",
    footer: "Aggregate Delivery Rate",
    footerValue: "98.4%",
    icon: "send",
    tone: "blue",
  },
  {
    label: "ACTIVE ANNOUNCEMENTS",
    period: "",
    value: "6 Live",
    change: "4",
    description: "Campus-wide",
    footer: "Next Scheduled",
    footerValue: "Sep 08, 09:00 AM",
    icon: "bell",
    tone: "teal",
  },
  {
    label: "AUTOMATED TRIGGERS",
    period: "",
    value: "1,420",
    change: "Today",
    description: "",
    footer: "System Execution Delay",
    footerValue: "-1.2 sec",
    icon: "zap",
    tone: "purple",
  },
  {
    label: "DELIVERY FAILURES",
    period: "",
    value: "18 Failed",
    change: "12 Action Required",
    description: "",
    footer: "Auto-retry in queue",
    footerValue: "6",
    icon: "alert",
    tone: "red",
  },
];

export const announcements = [
  {
    id: 1,
    status: "Published",
    date: "Sep 04, 2026",
    time: "08:30 AM",
    author: "Dr. M. Sen (Principal)",
    title:
      "Annual Sports Day 2026 – Schedule, House Uniforms & Transport Guidelines",
    description:
      "Important information for parents and students regarding sports day schedules, house uniforms and transportation.",
    audience: "All Parents & Students (Grades 1–12)",
    recipients: "2,496",
    channels: ["In-App", "Email", "SMS"],
    delivery: "98.4%",
    read: "84% Read",
    priority: "normal",
  },

  {
    id: 2,
    status: "Published",
    date: "Sep 02, 2026",
    time: "02:15 PM",
    author: "Examination Controller",
    title: "Term 1 Mid-Term Examination Timetable & Seating Protocols",
    description:
      "Term 1 examination timetable, seating arrangements and important examination protocols.",
    audience: "Secondary & Sr. Secondary (Grades 9–12)",
    recipients: "640",
    channels: ["In-App", "Email"],
    delivery: "99.4%",
    read: "92% Read",
    priority: "normal",
  },

  {
    id: 3,
    status: "High Priority Alert",
    date: "Sep 05, 2026",
    time: "07:15 AM",
    author: "Campus Administration",
    title:
      "Urgent: Air Quality Index Advisory – Outdoor Activity Suspension & Recess Indoors",
    description:
      "Outdoor activities and recess are temporarily suspended due to air quality conditions.",
    audience: "Entire Campus (Parents, Staff & Transport)",
    recipients: "1,334",
    channels: ["SMS Urgent", "In-App Banner"],
    delivery: "99.8%",
    read: "45 sec",
    priority: "high",
  },

  {
    id: 4,
    status: "Scheduled",
    date: "Sep 08, 2026",
    time: "09:00 AM",
    author: "Middle School Coordinator",
    title: "Upcoming Parent–Teacher Meeting (PTM) Slot Booking Window (Term 1)",
    description:
      "Parents can select available appointment slots for the upcoming parent-teacher meeting.",
    audience: "Grades 6 to 8 Parents",
    recipients: "480 Guardians",
    channels: ["In-App Push", "Email Digest", "SMS Alert"],
    delivery: "Auto-trigger",
    read: "in 2d 23h",
    priority: "normal",
  },
];

export const failedDeliveries = [
  {
    id: "FD-001",
    recipient: "Parent - ST1024",
    channel: "SMS",
    reason: "Invalid phone number",
    attempts: 2,
    time: "09:42 AM",
    status: "Action Required",
  },

  {
    id: "FD-002",
    recipient: "Parent - ST1089",
    channel: "Email",
    reason: "Mailbox unavailable",
    attempts: 1,
    time: "09:28 AM",
    status: "Retry Queued",
  },

  {
    id: "FD-003",
    recipient: "Parent - ST1132",
    channel: "In-App",
    reason: "Device token expired",
    attempts: 3,
    time: "08:56 AM",
    status: "Action Required",
  },
];

export const audienceOptions = [
  "Parents",
  "Teachers",
  "Students",
  "School Staff",
  "Transport",
];

export const channelOptions = ["In-App Notification", "Email Digest", "SMS"];

export const priorityOptions = ["Standard Informative", "High Priority Alert"];
