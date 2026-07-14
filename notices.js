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
    date: "2026-07-14",
    title: "WATER SHUT-OFF NOTICE",
    category: "Parking",
    pinned: false,
    body: `
      <p>Dear Residents,
      
WATER SHUT-OFF--TOMMOROW 7/15/2026
We wanted to notify residents as soon as we were able that a large boiler room project has been scheduled for tomorrow, which will require the building's water to be temporarily shut off.
Water service will be unavailable from approximately 7:30 AM to 2:00 PM. While we anticipate the work may be completed earlier, we wanted to provide the latest estimated timeframe so you can plan your day accordingly.
We understand this may be an inconvenience and sincerely appreciate your patience and understanding as this important building maintenance is completed.
Thank you,
Management

the number listed above.
</p>
      <ul>
        <li>Date: Wednesday, July 15</li>
        <li>Time: 7:30 AM – 2:00 PM</li>
        <li>Affected: All units in Building 1601 and 1605</li>
      </ul>
      <p>We appreciate your patience while our team completes this work.</p>
    `,
  },
  {
    date: "2026-07-01",
    title: "Important Parking Reminders",
    category: "Parking",
    pinned: false,
    body: `
      <p>Dear Residents,

Due to recent activity in the parking lot, we would like to remind residents of the following information. We also want to ensure that parking is available for all residents and to help maintain an orderly community, in accordance with the last notice dated 6.24.26 (please refer back to notice for more information regarding parking) please follow the parking rules and regulations below:

Guest parking is for guests only. Resident vehicles are not permitted to park in the designated guest parking area located in the back row, where signs indicate "Guest Parking Only." Any resident vehicle parked in these spaces is subject to immediate towing at the owner's expense.

Residents with garage permits must park in the garage. If you have been assigned a garage parking space, you are expected to use your designated garage space.
Surface parking is limited. Surface lot spaces are reserved exclusively for residents who have been issued surface lot permits.

Permit Color Designations:
Green Garage Permit: Park only in your assigned garage space.
Orange Surface Lot Permit: Park only in designated surface lot spaces.

Please also note: Please use the entire resident parking lot. If the spaces closest to your apartment are full, please check other areas of the lot, as resident spaces may still be available. While it may require a slightly longer walk, utilizing all available resident parking helps ensure guest parking remains available for guests and improves parking for everyone.
Your cooperation helps ensure that parking remains fair and accessible for everyone in our community. Thank you for following these parking rules. If you have any questions, please don’t hesitate to contact the office at the number listed above.
</p>
    `,
  },
];
