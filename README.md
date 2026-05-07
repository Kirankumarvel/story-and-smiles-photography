# Story and Smiles Photography — Website

Marketing website for **Story and Smiles Photography**, a candid wedding & family photography studio based in **Banashankari, Bengaluru**. Built as a fast, mobile‑first landing page focused on **Local SEO**, lead generation, and portfolio showcase.

---

## Highlights

- Clear hero section with value proposition + call‑to‑action
- Services sections for weddings, pre‑weddings, maternity, newborn & baby, events, and portfolio shoots
- Featured gallery / portfolio grid
- Client testimonials
- Contact section with enquiry form + WhatsApp CTAs
- Sticky navigation + back‑to‑top button
- Instagram integration for social proof

---

## Tech Stack

- **HTML5 + CSS3** (custom responsive layout)
- **Vanilla JavaScript** for interactions and animations
- No framework dependency — easy to host on GitHub Pages or any static host

---

## SEO & Local SEO

Optimised for searches like **“wedding photographer in Bengaluru”** and nearby localities:

- Keyword‑optimised `<title>` and meta description
- LocalBusiness **JSON‑LD schema** (name, address, phone, URL, social profiles)
- Descriptive, keyword‑aware image `alt` attributes
- Clean heading hierarchy (H1 + H2/H3)
- Internal anchor links for crawlability
- Mobile‑first design and performance‑friendly assets (preloading/compression as needed)

---

## Getting Started (Local Development)

### 1) Clone the repository

```bash
git clone https://github.com/Kirankumarvel/story-and-smiles-photography.git
cd story-and-smiles-photography
```

### 2) Run a local server

#### Option A: Python
```bash
python -m http.server 5500
```

Now open:
- http://localhost:5500/

#### Option B: VS Code Live Server
- Install the **Live Server** extension
- Right‑click `index.html` → **Open with Live Server**

---

## Project Structure

```text
.
├── index.html           # Main landing page
├── css/
│   ├── style.css        # Base styles
│   └── animations.css   # Animations & scroll effects
├── js/
│   ├── main.js          # Navbar, CTA interactions, counters
│   └── animations.js    # Scroll-triggered animations
└── assets/
    ├── images/          # Logo, hero, gallery images
    └── icons/           # Favicons / SVGs (optional)
```

---

## Customisation

- Update **contact details, address, and social links** in `index.html`
- Replace images inside `assets/images/` with final edited photos
- Adjust colors/typography/spacing in `css/style.css`
- Update SEO copy (title/meta/on‑page content) as services or locations change

---

## Deployment

This is a static site and can be hosted on:

- **GitHub Pages**
- **Netlify / Vercel**
- Any static web server (Apache/nginx/S3 + CloudFront)

Serve `index.html` as the entry point.

---

## License

Add your preferred license here (e.g., MIT) or mark as proprietary.
