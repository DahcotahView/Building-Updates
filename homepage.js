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
  status: "unavailable",
  backAt: "Friday, 7/17 at 9:00 AM",
  note: "Office Closure Thursday 7/16",
};

/* ---------- THIS WEEK AT DAHCOTAH VIEW ----------
   Five entries, Monday through Friday, in order.
   Dates are added automatically for the current week —
   you only write what is happening each day.               */

const THIS_WEEK = [
  "Our new wave of camera installations went in around the building for added security.",
  "Reinforcement and reminders of parking rules.",
  "Building and apartment inspections.",
  "Office closed.",
  "Continuation of building and apartment inspections.",
];

/* ---------- UPCOMING ----------
   Add or remove items freely. "when" is the label shown in gold. */

const UPCOMING = [
  {
    when: "July 30",
    what: "City inspections will occur again for all apartments that received a notice indicating they will be revisited.",
  },
  {
    when: "In the coming days",
    what: "We may have temporary water shut-offs for parts of some days as we complete a project on the water valves in the boiler room. Watch the Notices page for exact dates and times.",
  },
  {
    when: "Very soon",
    what: "Our new outdoor play set has finally been delivered after the long wait, and installation is underway on the 1601 green.",
  },
];
