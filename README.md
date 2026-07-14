# Dahcotah View — Resident Notice Board

One QR code, posted once, that always shows residents the current notice (translatable into 100+ languages) plus a full archive of past notices.

## One-Time Setup (about 10 minutes)

1. **Create a free GitHub account** at github.com (if you don't have one). A professional username works best — it appears in your page's web address.
2. **Create a new repository.** Click the "+" in the top right → "New repository."
   - Repository name: `notices` (or `dahcotah-notices`)
   - Set it to **Public**
   - Click "Create repository"
3. **Upload the files.** On the new repository page, click "uploading an existing file," then drag in `index.html` and `notices.js`. Click "Commit changes."
4. **Turn on GitHub Pages.** Go to the repository's **Settings → Pages**. Under "Branch," choose `main` and folder `/ (root)`, then Save.
5. **Get your link.** After a minute or two, the Pages screen shows your live address:
   `https://YOUR-USERNAME.github.io/notices/`
   That link is permanent — it is what the QR code will point to.

## Posting a New Notice (about 2 minutes)

1. Open your repository on github.com and click `notices.js`.
2. Click the **pencil icon** (Edit).
3. Copy an existing notice block, paste it at the **top** of the list, and update the date, title, category, and body. Instructions are written inside the file.
4. Click "Commit changes." The page updates automatically — no new QR code ever needed.

## Categories

Use one of these so the colored tag displays correctly:
`Office` · `Maintenance` · `Parking` · `Community` · `Emergency`

## Tips

- Set `pinned: true` on a notice to keep it featured at the top even after newer notices are posted (only pin one at a time).
- Delete the two "Example" notices whenever you're ready — they're just there to show how the archive looks.
- The page is print-friendly: opening a notice and printing it produces a clean paper copy for doors or mailboxes.
