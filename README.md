# The Luke–McKinnon Line

A documented family history of the Luke, McKinnon, Hall and Giddens families of
Coffee, Irwin and Atkinson Counties, Georgia — and Levy County, Florida.

Nine generations, traced back from Jaxon Brady Luke (b. 2000) to Brunswick County,
North Carolina before 1774.

## The site

| Page | What's on it |
|---|---|
| `index.html` | The tree. Every person is clickable — dates, census households, and the exact records behind each claim. |
| `origins.html` | Where each line came from, what the surnames do and don't prove, and an honest account of what DNA would and wouldn't settle. |
| `stories.html` | Trades, offices and lodges; the notable events; and the hard chapters — slavery, Indian removal, and the Confederacy. |
| `records.html` | The document archive. Eight records reproduced in full and zoomable; twenty-eight more linked. |

## The evidence standard

Every claim on this site carries one of four grades, shown as a colour on the left
edge of each card:

- **CONFIRMED** — supported by a primary or near-primary record: a death certificate,
  a census page, a marriage record, a military or pension file, a funeral-home
  obituary, or a photographed headstone.
- **PROBABLE** — a strong circumstantial case, but no clinching document.
- **LEAD ONLY** — taken from a user-submitted online tree or an unsourced memorial.
  **Not proof.** A research target.
- **LIVING** — a living person; dates and places withheld.

**Nothing should be promoted from *probable* to *confirmed* without a primary
document.** Online family trees, Find a Grave biography text, and Find a Grave family
links are all user-entered and are not primary documents.

## What's hosted here, and why

`docs/` holds eight document images. All are **United States federal records or
Georgia state records** — public documents — copied from the National Archives and
the Georgia Archives so they load instantly and survive changes at the source:

- Four Georgia death certificates (RG 26-5-95): Lucius Luke 1920, Lessie Mae Luke
  1919, Willie Luke 1925, David Perry Luke 1920
- Four 1950 federal census sheets: the Luke, McKinnon (two sheets) and Hall households

Headstone photographs belong to the people who took them, and the Georgia newspaper
archive sits behind an access challenge. Those are **linked rather than copied**, and
quoted where the words matter.

## Running it

Static HTML. No build step, no dependencies beyond Google Fonts. Open `index.html`
in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Publishing to GitHub Pages

1. Push this folder to a repository
2. **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save**
3. Live in about a minute at `https://<username>.github.io/<repo>/`

## Editing

All the content lives in two files, so you never have to touch the HTML:

- `assets/data.js` — people, census households, and the generation structure
- `assets/docs.js` — the document archive

Each person is an object keyed by a short id. To add someone, add an entry to
`PEOPLE`, then reference the id in `GENS`. To add a document, add an entry to `DOCS`
(hosted, with an image) or `LINKED` (external).

## Other formats

A GEDCOM 5.5.1 file (`luke-mckinnon.ged`) carries the same data with all evidence
grades preserved in the notes, and imports into Ancestry, FamilySearch, MyHeritage or
Gramps. A two-sheet printable pedigree chart is also available as PDF.

---

Compiled September 2026.
