/* ============================================================
   DAHCOTAH VIEW — COMMUNITY BOARD POSTS
   ============================================================
   HOW MODERATION WORKS:
   1. Residents submit posts through the Community page form.
      Submissions arrive in the office email — nothing is
      published automatically.
   2. Review the submission. If it's kind and appropriate,
      publish it by copying a block below, pasting it at the
      TOP of the list, and filling in the details from the
      email. Commit — it appears on the site in a minute or two.
   3. To remove a post (item claimed, event passed, etc.),
      just delete its block and commit.

   FIELDS:
   date     — "YYYY-MM-DD" (used for sorting)
   category — Must match one of: "Furniture & Household Giveaway",
              "Food Share / Donation", "Community Awareness / Heads-Up",
              "Lost & Found", "Neighborly Ask / Other"
   title    — The post headline
   body     — The post text (keep it as the resident wrote it,
              lightly edited for clarity if needed)
   by       — First name + building only, e.g. "Maria — Bldg 1605".
              Never publish unit numbers or full names.
   contact  — OPTIONAL. Only include if the resident chose to
              display contact info. Otherwise delete the line or
              leave as "".
   image    — OPTIONAL. If the resident emailed a photo, upload
              the image file to this GitHub repository (Add file →
              Upload files) and put its filename here, e.g.
              "couch-photo.jpg". Otherwise leave as "".
   ============================================================ */

const COMMUNITY_POSTS = [
  {
    date: "2026-07-16",
    category: "Neighborly Ask / Other",
    title: "Welcome to the Community Board!",
    body: "This is a friendly space for neighbors — giveaways, food shares, lost & found, and helpful heads-ups. Submit a post below and, once approved by the office, it will appear right here. Be kind, be neighborly, and happy posting!",
    by: "The Dahcotah View Office",
    contact: "",
    image: "",
  },
];
