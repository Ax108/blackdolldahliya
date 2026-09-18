# Open Graph (OG) Setup Instructions

Open Graph meta tags control how your website appears when shared on platforms like WhatsApp, Twitter/X, LinkedIn, Facebook, Slack, Discord, and iMessage.

---

## 1. Where to Edit

All Open Graph tags are defined in [index.html](file:///d:/main%20projects/astrax/blackdolldahlliya/index.html) within the `<head>` section:

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Black Doll Dahliya" />
<meta property="og:url" content="https://yourdomain.com/" />
<meta property="og:title" content="Black Doll Dahliya" />
<meta property="og:description" content="Modern web experience built with React, Vite, Lucide, Axios, and Framer Motion." />
<meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Black Doll Dahliya preview banner" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Black Doll Dahliya" />
<meta name="twitter:description" content="Modern web experience built with React, Vite, Lucide, Axios, and Framer Motion." />
<meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />
```

---

## 2. Image Specifications

- **Dimensions**: **1200 × 630 pixels** (standard 1.91:1 aspect ratio).
- **Format**: JPG, PNG, or WebP (JPG or PNG recommended for maximum social crawler compatibility).
- **File size**: Keep it under **1 MB** (ideally 300-500 KB) for quick crawler downloads.
- **Safe zone**: Keep critical text and logos within the center 1200 × 540 px area to avoid edge cropping on mobile previews.
- **Absolute URLs**: Social crawlers **require absolute URLs** (e.g. `https://yourdomain.com/og-image.jpg`, not `/og-image.jpg`).

---

## 3. How to Add Your Image

1. Place your exported image into the `public/` folder as `public/og-image.jpg`.
2. When deployed, it will be accessible at `https://yourdomain.com/og-image.jpg`.
3. In `index.html`, replace `https://yourdomain.com` with your production domain (e.g., `https://blackdolldahliya.com`).

---

## 4. Testing & Validation Tools

After deploying your site, verify your preview using these free tools:

1. **[OpenGraph.xyz](https://www.opengraph.xyz)** — Live preview across Twitter, Facebook, LinkedIn, Discord.
2. **[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)** — Clears Facebook cache and inspects OG tags.
3. **[LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)** — Validates link previews on LinkedIn.
4. **[Twitter Card Validator](https://cards-dev.twitter.com/validator)** (or compose a test tweet in draft).
