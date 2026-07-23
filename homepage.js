/* ============================================================
   DAHCOTAH VIEW — HOME PAGE CONTENT
   ============================================================
   This is the ONLY file you edit to update the home page.
   Edit it on GitHub (pencil icon), commit, and the site
   updates in a minute or two.
   ============================================================ */

/* ---------- LIVE OFFICE STATUS ----------
   Update this whenever you step away, go into a meeting, etc.
   status options (must match exactly):
     "available"  → green dot, "Office staff is currently available"
     "away"       → red dot,   "Staff is away from the desk"
     "meeting"    → red dot,   "Staff is in a meeting"
     "unavailable"→ red dot,   "Staff is currently unavailable"
     "closed"     → gray dot,  "The office is closed"
   backAt → time you expect to be available again, e.g. "2:30 PM".
            Leave as "" to hide that line (e.g., when available).
   note   → optional extra line, e.g. "Please use the drop box for
            rent payments." Leave as "" to hide.                  */

const OFFICE_STATUS = {
  todaysHours: "9:00 AM – 4:00 PM",
  status: "available",
  backAt: "",
  note: "Please note that this week we will be more limited in the office than normal due to increased inspection time. This week, we will be strictly by appointment only for any resident meetings. Please request appointment in the contact page.",
};

/* ---------- THIS WEEK AT DAHCOTAH VIEW ----------
   Five entries, Monday through Friday, in order.
   Dates are added automatically for the current week —
   you only write what is happening each day.               */

const THIS_WEEK = [
  "Continuing Inspections",
  "Continuing Inspections",
  "More availability in office through the end of the week! Appointment based only for larger concerns and inquiries.",
  "Maintenance and Reinspections",
  "Maintenance and Reinspections",
];

/* ---------- UPCOMING ----------
   Add or remove items freely. "when" is the label shown in gold. */

const UPCOMING = [
  {
    when: "July 30",
    what: "City inspections will occur again for all apartments that received a management inspection.",
  },
  {
    when: "In the coming days",
    what: "We will be scheduling reinspections for those that need to be revisited.",
  },
  {
    when: "Very soon",
    what: "Our new outdoor play set has finally been delivered after the long wait, and installation is underway on the 1601 green.",
  },
];
