/* ============================================================
   DAHCOTAH VIEW APARTMENTS — RESIDENT NOTICES
   ============================================================
   This is the ONLY file you need to edit to post a new notice.

   HOW TO POST A NEW NOTICE:
   1. Copy one of the notice blocks below (from the opening {
      to the closing }, — including the comma).
   2. Paste it at the TOP of the list, right under "const NOTICES = [".
   3. Update the date, title, category, and body.
   4. Save (commit) the file. The page updates automatically
      within a minute or two. The QR code never changes.

   FIELDS:
   date     — "YYYY-MM-DD" format (used for sorting and display)
   title    — Short headline for the notice
   category — One of: "Office", "Maintenance", "Parking",
              "Community", "Emergency" (controls the tag color)
   pinned   — true keeps a notice featured at the top even after
              newer ones are posted. Only pin one at a time.
   body     — The notice text. Wrap each paragraph in <p> ... </p>.
              You can also use <ul><li> ... </li></ul> for lists
              and <strong> ... </strong> for bold.
   ============================================================ */

const NOTICES = [
  {
    date: "2026-07-14",
    title: "Welcome to the Resident Notice Board",
    category: "Office",
    pinned: true,
    body: `
      <p>This page is the official notice board for Dahcotah View Apartments. When you scan the posted QR code, you will always land here — the newest notice appears at the top, and past notices are archived below.</p>
      <p><strong>To read this page in your language:</strong> use the language bar at the top of the page. Every notice, current and past, will be translated.</p>
      <p>Questions? Contact the leasing office at 1601 E. Cliff Road, Burnsville, MN.</p>
    `,
  },
  {
    date: "2026-07-10",
    title: "Example: Water Shut-Off — Building 1605",
    category: "Maintenance",
    pinned: false,
    body: `
      <p>This is a sample notice so you can see how the archive works. Replace or delete it when you post your first real notice.</p>
      <ul>
        <li>Date: Thursday, July 10</li>
        <li>Time: 9:00 AM – 1:00 PM</li>
        <li>Affected: All units in Building 1605</li>
      </ul>
      <p>We appreciate your patience while our team completes this work.</p>
    `,
  },
  {
    date: "2026-07-01",
    title: "Example: Guest Parking Reminder",
    category: "Parking",
    pinned: false,
    body: `
      <p>This is a second sample notice. Guest vehicles must park in marked guest stalls only. Vehicles parked in reserved resident stalls or fire lanes may be towed at the owner's expense.</p>
    `,
  },
];
