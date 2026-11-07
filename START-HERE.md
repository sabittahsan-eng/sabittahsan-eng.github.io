# Putting your portfolio online

Written for Sabit — assumes you have never used GitHub, and nothing is installed on your PC.
Total time: about 20 minutes. Cost: free, forever.

---

## First: look at it on your own computer

Double-click **`index.html`** in this folder. It opens in your browser and works fully — every
gallery, filter and popup. Nothing needs to be installed.

Do this before uploading anything. If something looks wrong, fix it first (see *Editing* below).

---

## Step 1 — Make a GitHub account

1. Go to **https://github.com/signup**
2. Enter your email, a password, and a **username**.

   **The username becomes your web address**, so choose carefully. It is public and
   annoying to change later.

   | Username | Your site will be |
   |---|---|
   | `sabithossain` | `sabithossain.github.io` |
   | `sabit-hossain` | `sabit-hossain.github.io` |
   | `sabittahsan` | `sabittahsan.github.io` |

   Pick a clean, professional one. Avoid numbers and underscores if you can — this goes on your CV.

3. Verify your email when GitHub sends the link.

---

## Step 2 — Create the repository

A "repository" (repo) is just a folder on GitHub.

1. Go to **https://github.com/new**
2. **Repository name**: type `YOURUSERNAME.github.io`

   Use your *actual* username. If your username is `sabithossain`, type exactly
   `sabithossain.github.io`. This exact naming is what makes GitHub host it as a website.
3. Set it to **Public**. (Private repos can't be published for free.)
4. Do **not** tick "Add a README file".
5. Click **Create repository**.

---

## Step 3 — Upload the site

The site is **134 files**. GitHub's browser uploader caps out at 100 files per go, so
use GitHub Desktop — it's easier anyway, and it's how you'll push every future change.

### Use GitHub Desktop (recommended)

1. Download and install **https://desktop.github.com** — free, about 2 minutes.
2. Open it and sign in with the account you just made.
3. **File → Clone repository →** pick `YOURUSERNAME.github.io` → choose any folder → **Clone**.
4. Open the folder it just created. It will be empty except for a hidden `.git` folder.
5. Copy **everything** from this `portfolio` folder into it — `index.html`, the `assets`
   folder, `.nojekyll`, and the two `.md` files.
6. Back in GitHub Desktop you'll see all 134 files listed. Type `First upload` in the
   summary box, bottom left, and click **Commit to main**.
7. Click **Push origin** at the top.

Done. From now on, changing the site is: edit the file → GitHub Desktop → Commit → Push.

### Or the browser, in two passes (no install)

On the empty repo page click **"uploading an existing file"**, then:

- **Pass 1** — drag in `index.html`, `.nojekyll`, and the `assets` folder *with
  `assets/img/design` temporarily moved out to your Desktop*. Commit.
- **Pass 2** — click **Add file → Upload files**, drag the `design` folder in, and
  **before committing** check the path box above the file list reads
  `assets/img/design`. If it doesn't, the images will land in the wrong place.

> `.nojekyll` is hidden by default. In File Explorer: **View → Show → Hidden items**.

This is fiddlier and easy to get wrong, which is why GitHub Desktop is the better path.

---

## Step 4 — Turn on GitHub Pages

1. In your repository, click **Settings** (top row).
2. In the left sidebar, click **Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose **`main`** and folder **`/ (root)`**. Click **Save**.
5. Wait 1–3 minutes, then reload the page. A green banner appears with your live address.

**Your site is now live at `https://YOURUSERNAME.github.io`.**

First publish can take up to 10 minutes. If you get a 404, wait and hard-refresh
(**Ctrl + F5**). Don't panic and re-upload.

---

## Step 5 — Use it

Put the link on your CV, your LinkedIn *Featured* section, your LinkedIn contact info,
your Behance profile, and your email signature.

---

# Editing the site later

## The rule

**Everything you'd want to change lives in one file: `assets/js/data.js`.**

Open it in Notepad (or better: download **VS Code**, free, from https://code.visualstudio.com).
Change the text between the quote marks. Save. Refresh your browser.

Don't touch `main.js` or `style.css` unless you want to change how it *behaves* or *looks*.

### Things you'll probably want to do first

**Tag your award-winning photos.** In the `photos:` section each line ends with `award: ""`.
Put the award inside the quotes and a gold badge appears on that tile:

```js
{ img: "river-gorge.jpg", title: "The Gorge", category: "Landscape", award: "1st · BUETPS" },
```

Right now only `river-gorge.jpg` has a badge, and it just says "Prize winner" because you
told me it won something but not which of the four competitions. Change it to the real one.
The other three wins have no photo attached yet.

**Add titles you prefer.** I named all 39 photographs and 78 design pieces myself from
looking at them. Any title you don't like is one word away from being fixed.

**Add the projects that have no artwork in the Drive yet:** IPE Fiesta 2026 (logo + crests),
ResearchSpark 3MT (backdrop, X-banners, rulebook), Manufactura 1.0, Lean Sprint 3.0 casebook,
Corporate Connect crests. Add a group to `designGroups:`, then add pieces to `design:` with
that group's `id`.

**New images need one extra step.** After dropping files into `assets/img/...`, their size
isn't in `assets/js/sizes.js`, so the grid can't reserve space and the layout will shuffle
slightly as they load. It still works — it just looks less tidy. Ask me to regenerate that
file, or ignore it.

**Replace the CV.** The file at `assets/docs/Sabit-Hossain-CV.pdf` is the Unilever SPARKS
version I found in your Downloads. Replace it with a general one — keep the filename
identical and the Download CV button keeps working.

## Uploading your changes

Go to your repository → navigate to the file → click the **pencil icon** → edit → **Commit changes**.
The live site updates in about a minute.

For bigger changes, install **GitHub Desktop** (https://desktop.github.com). It lets you edit
files on your PC normally and click one button to publish. Much less painful than the website
once you're making changes regularly.

---

# A note on privacy

Two deliberate choices, because a website is not a CV:

- **Your referees' phone numbers and emails are hidden.** Your CV shows them, but a CV goes to
  one employer while a website is read by anyone — including address-harvesting bots.
  Publishing someone else's personal number is their decision, not yours. Ask Rashik Ahnaf and
  Sheikh Mahir Abrar first; if they're happy, set `showReferenceContacts: true` in `data.js`.
- **Your own phone number and email are shown**, since that's the point of a contact section.
  If you'd rather not have your number public, delete the phone block in `data.js`.
- **The CV PDF contains both your number and your referees' numbers.** Consider uploading a
  version with the referees listed as "available on request".

---

# Optional: your own domain

A custom domain like `sabithossain.com` costs roughly $10–12/year.

1. Buy it from Namecheap, Cloudflare, or a local Bangladeshi registrar.
2. At your registrar, add these DNS records:

   | Type | Name | Value |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | YOURUSERNAME.github.io |

3. In your repo: **Settings → Pages → Custom domain**, type your domain, **Save**.
4. Tick **Enforce HTTPS** once it becomes available (can take a few hours).

---

# If something breaks

| Problem | Fix |
|---|---|
| 404 after setting up Pages | Wait 10 minutes, then **Ctrl + F5**. Check the repo is named exactly `USERNAME.github.io` and is Public. |
| Page loads but is unstyled | The `assets` folder didn't upload with its structure. Re-upload the folder itself, not its contents. |
| Images missing | Filename mismatch. Names are **case-sensitive** on GitHub: `Photo.JPG` ≠ `photo.jpg`. |
| Blank page after editing `data.js` | You broke the syntax — usually a missing comma or quote mark. Press **F12** in the browser, read the red error in the Console, and check that line. |
| Changes not showing | Hard refresh: **Ctrl + F5**. |
