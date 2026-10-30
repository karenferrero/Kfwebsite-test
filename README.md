# karenferrero.com

Personal site for Karen Ferrero: a digital executive portfolio that pairs enterprise leadership outcomes with hands-on AI products.

Plain HTML and CSS. No build step, no framework. Open `index.html` in a browser or serve the folder with any static host (GitHub Pages works as-is).

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | Home: intro, Impact ledger, Selected work, The Lab, About |
| `work/*.html` | One page per case study (challenge, what I led, what changed, result) |
| `css/site.css` | All styles. Colour and type tokens are at the top of the file |
| `js/site.js` | Scroll-spy for the left-rail navigation. Optional |
| `assets/` | Put `karen-ferrero-resume.pdf` and app screenshots here |

## Editing content

- **Impact figures** live in the `.ledger` block of `index.html`. Each row is a figure, a one-line description with company context, and the reporting period.
- **Case studies** are standalone pages in `work/`. Copy one to add another, then add a row to the `.work-list` on the home page.
- **The Lab** uses CSS mock screens as stand-ins. Replace each `.screen` block with an `<img>` of the real app and set the status label (`In development`, `Prototype`, `Production`).
- **Colours and fonts** are CSS custom properties in `:root` at the top of `css/site.css`. Dark mode follows the visitor's system setting.

## Before launch

1. Drop the résumé PDF at `assets/karen-ferrero-resume.pdf`.
2. Confirm JobCompass status, add a live link if there is one, and swap in real screenshots.
3. Check the contact email in the rail and the About section.
4. For a custom domain on GitHub Pages, add a `CNAME` file containing `karenferrero.com` and point DNS at GitHub.
